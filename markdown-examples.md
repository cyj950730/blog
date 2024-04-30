# vue3 的发布订阅源码解析

vue3 的核心在于发布订阅模式和响应式的数据拦截，今天我们一起来看一下到底是如何实现的，以下的代码是简化以后的，如果需要深层次的了解可以下载 xue3 的源码进行阅读。

```js{4}
<script>
  let activeEffect;/*全局变量 */
  class Dep {
    constructor(value) {
      /* 设定数据的依赖 */
      this.subscbriber = new Set();
      this._value = value;

    }
    /* 获取数据 */
    get value() {
      /* 收集依赖 */
      this.depend();
      return this._value
    }
    /* 订阅 */
    set value(newValue) {
      this._value = newValue;
      /*  */
      this.notify()
    }

    /*  */
    depend() {
      if (activeEffect) {
        this.subscbriber.add(activeEffect);

      }
    }
    /* 通知 */
    notify() {
      this.subscbriber.forEach((effect) => {
        effect();
      });
    }
  }
  /* 监听 */
  function watchEffect(effect) {
    activeEffect = effect;/* 发布 */
    effect();/* 通知 */
    activeEffect = null;
  }
  const dep = new Dep("李四");
  /* 监听 */
  watchEffect(() => {

    console.log(dep.value);

  });
  dep.value = "张三";
</script>


```

## 代码解析

通过 watchEffect 函数来订阅数据，通过 effect 函数来发布数据，通过 depend 函数来收集依赖，通过 notify 函数来通知依赖，通过 value 函数来获取数据，通过 set 函数来设置数据。
