# 目的
> 手动实现compiler和事件绑定，以一个计数器为开发内容

1. 绑定是依据`data-dom`
2. 将事件和随机数id存到eventPool
3. 通过遍历body的元素，来找出和eventPool里相对应的随机数id来绑定事件