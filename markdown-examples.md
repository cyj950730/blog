# vue3 的发布订阅源码解析

vue3 的核心在于发布订阅模式和响应式的数据拦截，今天我们一起来看一下到底是如何实现的，以下的代码是简化以后的，如果需要深层次的了解可以下载 xue3 的源码进行阅读。

```js{4}
<script>
 let a = 1
let b = 2
let c = a + b

console.log(c) // 3

A0 = 2
console.log(c) // 仍然是 3
function update() {
  A2 = A0 + A1
}
 {/* 监听数据的响应式 */}
 function reactive(obj) {
  return new Proxy(obj, {
    {/* 这个target是目标对象，key是目标对象的属性名  get 是拦截器，当访问目标对象的属性时，会执行这个函数 */}
    get(target, key) {
      track(target, key)
      return target[key]
    },
    {/* target, key, value set是跟新的操作，将 value 赋值给 target[key] */}
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
    }
  })
}

function ref(value) {
  const refObject = {
    get value() {
      track(refObject, 'value')
      return value
    },
    set value(newValue) {
      value = newValue
      trigger(refObject, 'value')
    }
  }
  return refObject
}
</script>


<script>




  </script>
## 代码解析

这里我们定义了一个函数，如果我们修改个 a，b 个数据的值，不去调用这个 update 函数，那个这个值是不会发生变化的，如果我们修改这个 a，b 中的任意一个值的变化，再次调用这个函数，这个函数的值会发生变化，所以我们可以称 a，b 是这个函数的依赖，现在需要解决的是如果能检测到这个函数的值的变化，所以我们联想到了数据劫持，在vue2中我们用的是object.defineProperty，但是现在我们使用的是 Proxy，所以需要使用 Proxy 的拦截器来监听数据的变化。这个也是vue3中相比与vue2一个最大的变化，因为我们object.defineProperty劫持的是每个数据源的本身，所以我们在修改数据的时候，尤其是数组（如通过数组的下标）的的时候，我们无法监听数据的的变化，而我们通过Proxy代理了一个对象，这个数据的响应式本身不在原来的数据身上，所以可以实现任意数据的拦截

## 拓展

我们的 watchEffect 的函数只能监听具有响应式的函数，如果一个函数没有绑定 get set 也就是如果没有通过 ref reactive 等函数包裹，那么 watchEffect 函数是无法监听的。如果我们在
```
