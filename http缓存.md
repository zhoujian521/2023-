> https://wenku.baidu.com/view/96d8ce09ac45b307e87101f69e3143323968f588.html

##强缓存
浏览器请求文件时，不会从服务器请求资源，直接从本地缓存中读取，返回200 （分为memory cache,disk cache)

###设置强缓存 response header 缓存生效返回200
1. expires  http1.0
    服务器返回的请求结果到期时间，如果再次请求，未超过该时间，直接使用缓存；
    缺点是用本地时间去做对比的，但是本地时间是可以修改的。
2.  cache-control  http1.1  优先级高于expires
    可取值：
    public:资源客户端与服务器都可以缓存；
    privite:资源只有客户端可以缓存；
    no-cache:客户端缓存，是否缓存需要跟服务器协商来验证；
    no-store:不使用缓存；
    max-age:缓存保质期。  相对时间 解决expires问题
3.  pragma
    http1.0禁用缓存，no-cache 与cache-control  no-cache一样

###协商缓存  缓存生效返回304，重新请求返回200
强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器决定是否使用缓存
1.  last-modified(服务器响应请求时，返回的该资源在服务器最后被修改的时间) response header
    if-modified-since 客户端再次请求时携带服务器返回的last-modified值与服务器做对比  request header
2.  Etag 服务器响应请求时，返回当前资源文件的一个唯一标识 hash    response header
    If-None-Match 客户端再次请求携带此值与服务器做对比 request header


使用：
HTML:协商缓存；  css,js,image:强缓存，文件名带上HASH

刷新：
ctrl+f5  重新加载，缓存都失效；
f5 只做协商缓存；
浏览器输入地址栏URL，会走强缓存--->协商缓存