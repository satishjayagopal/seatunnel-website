"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4842],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),k=c(t),m=r,h=k["".concat(o,".").concat(m)]||k[m]||p[m]||l;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4660:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],u={slug:"hive-to-clickhouse",title:"\u5982\u4f55\u5feb\u901f\u5730\u628a Hive \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",tags:["Hive","ClickHouse"]},o=void 0,c={permalink:"/blog/hive-to-clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-hive-to-clickhouse.md",source:"@site/blog/2021-12-30-hive-to-clickhouse.md",title:"\u5982\u4f55\u5feb\u901f\u5730\u628a Hive \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",description:"ClickHouse\u662f\u9762\u5411OLAP\u7684\u5206\u5e03\u5f0f\u5217\u5f0fDBMS\u3002\u6211\u4eec\u90e8\u95e8\u76ee\u524d\u5df2\u7ecf\u628a\u6240\u6709\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u65e5\u5fd7\u6570\u636e\u5b58\u50a8\u81f3ClickHouse\u8fd9\u4e2a\u4f18\u79c0\u7684\u6570\u636e\u4ed3\u5e93\u4e4b\u4e2d\uff0c\u5f53\u524d\u65e5\u6570\u636e\u91cf\u8fbe\u5230\u4e86300\u4ebf\u3002",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Hive",permalink:"/blog/tags/hive"},{label:"ClickHouse",permalink:"/blog/tags/click-house"}],readingTime:5.525,truncated:!1,authors:[],prevItem:{title:"\u5982\u4f55\u5feb\u901f\u5730\u628a HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",permalink:"/blog/hdfs-to-clickhouse"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528 Spark \u5feb\u901f\u5c06\u6570\u636e\u5199\u5165 Elasticsearch",permalink:"/blog/spark-execute-elasticsearch"}},s={authorsImageUrls:[]},p=[{value:"Hive to ClickHouse",id:"hive-to-clickhouse",children:[{value:"Hive Schema",id:"hive-schema",children:[],level:3},{value:"ClickHouse Schema",id:"clickhouse-schema",children:[],level:3}],level:2},{value:"Seatunnel with ClickHouse",id:"seatunnel-with-clickhouse",children:[{value:"Seatunnel",id:"seatunnel",children:[],level:3},{value:"Seatunnel Pipeline",id:"seatunnel-pipeline",children:[{value:"Spark",id:"spark",children:[],level:4},{value:"Input",id:"input",children:[],level:4},{value:"Filter",id:"filter",children:[],level:4},{value:"Output",id:"output",children:[],level:4}],level:3},{value:"Running Seatunnel",id:"running-seatunnel",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],k={toc:p};function m(e){var n=e.components,u=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,u,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ClickHouse\u662f\u9762\u5411OLAP\u7684\u5206\u5e03\u5f0f\u5217\u5f0fDBMS\u3002\u6211\u4eec\u90e8\u95e8\u76ee\u524d\u5df2\u7ecf\u628a\u6240\u6709\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u65e5\u5fd7\u6570\u636e\u5b58\u50a8\u81f3ClickHouse\u8fd9\u4e2a\u4f18\u79c0\u7684\u6570\u636e\u4ed3\u5e93\u4e4b\u4e2d\uff0c\u5f53\u524d\u65e5\u6570\u636e\u91cf\u8fbe\u5230\u4e86300\u4ebf\u3002"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0 ",(0,l.kt)("a",{parentName:"p",href:"/blog/hdfs-to-clickhouse"},"\u5982\u4f55\u5feb\u901f\u5730\u628aHDFS\u4e2d\u7684\u6570\u636e\u5bfc\u5165ClickHouse")," \u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\u4f7f\u7528 Seatunnel ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," \u5bf9HDFS\u4e2d\u7684\u6570\u636e\u7ecf\u8fc7\u5f88\u7b80\u5355\u7684\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u5199\u5165ClickHouse\u3002HDFS\u4e2d\u7684\u6570\u636e\u4e00\u822c\u662f\u975e\u7ed3\u6784\u5316\u7684\u6570\u636e\uff0c\u90a3\u4e48\u9488\u5bf9\u5b58\u50a8\u5728Hive\u4e2d\u7684\u7ed3\u6784\u5316\u6570\u636e\uff0c\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u64cd\u4f5c\u5462\uff1f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(4442).Z})),(0,l.kt)("h2",{id:"hive-to-clickhouse"},"Hive to ClickHouse"),(0,l.kt)("p",null,"\u5047\u5b9a\u6211\u4eec\u7684\u6570\u636e\u5df2\u7ecf\u5b58\u50a8\u5728Hive\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u8bfb\u53d6Hive\u8868\u4e2d\u7684\u6570\u636e\u5e76\u7b5b\u9009\u51fa\u6211\u4eec\u5173\u5fc3\u7684\u5b57\u6bb5\uff0c\u6216\u8005\u5bf9\u5b57\u6bb5\u8fdb\u884c\u8f6c\u6362\uff0c\u6700\u540e\u5c06\u5bf9\u5e94\u7684\u5b57\u6bb5\u5199\u5165ClickHouse\u7684\u8868\u4e2d\u3002"),(0,l.kt)("h3",{id:"hive-schema"},"Hive Schema"),(0,l.kt)("p",null,"\u6211\u4eec\u5728Hive\u4e2d\u5b58\u50a8\u7684\u6570\u636e\u8868\u7ed3\u6784\u5982\u4e0b\uff0c\u5b58\u50a8\u7684\u662f\u5f88\u5e38\u89c1\u7684Nginx\u65e5\u5fd7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE `nginx_msg_detail`(\n   `hostname` string,\n   `domain` string,\n   `remote_addr` string,\n   `request_time` float,\n   `datetime` string,\n   `url` string,\n   `status` int,\n   `data_size` int,\n   `referer` string,\n   `cookie_info` string,\n   `user_agent` string,\n   `minute` string)\n PARTITIONED BY (\n   `date` string,\n   `hour` string)\n\n")),(0,l.kt)("h3",{id:"clickhouse-schema"},"ClickHouse Schema"),(0,l.kt)("p",null,"\u6211\u4eec\u7684ClickHouse\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff0c\u6211\u4eec\u7684\u8868\u6309\u65e5\u8fdb\u884c\u5206\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE cms.cms_msg\n(\n    date Date,\n    datetime DateTime,\n    url String,\n    request_time Float32,\n    status String,\n    hostname String,\n    domain String,\n    remote_addr String,\n    data_size Int32\n) ENGINE = MergeTree PARTITION BY date ORDER BY (date, hostname) SETTINGS index_granularity = 16384\n")),(0,l.kt)("h2",{id:"seatunnel-with-clickhouse"},"Seatunnel with ClickHouse"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u4f1a\u7ed9\u5927\u5bb6\u4ecb\u7ecd\uff0c\u6211\u4eec\u5982\u4f55\u901a\u8fc7 Seatunnel \u5c06Hive\u4e2d\u7684\u6570\u636e\u5199\u5165ClickHouse\u4e2d\u3002"),(0,l.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," \u662f\u4e00\u4e2a\u975e\u5e38\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u80fd\u591f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u5b9e\u65f6\u6570\u636e\u5904\u7406\u4ea7\u54c1\uff0c\u5b83\u6784\u5efa\u5728Spark\u4e4b\u4e0a\u3002Seatunnel \u62e5\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4eceKafka\u3001HDFS\u3001Kudu\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u8fdb\u884c\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u5904\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u5199\u5165ClickHouse\u3001Elasticsearch\u6216\u8005Kafka\u4e2d\u3002"),(0,l.kt)("p",null,"Seatunnel\u7684\u73af\u5883\u51c6\u5907\u4ee5\u53ca\u5b89\u88c5\u6b65\u9aa4\u8fd9\u91cc\u5c31\u4e0d\u4e00\u4e00\u8d58\u8ff0\u4e86\uff0c\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u53ef\u4ee5\u53c2\u8003\u4e0a\u4e00\u7bc7\u6587\u7ae0\u6216\u8005\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction"},"Seatunnel Docs")),(0,l.kt)("h3",{id:"seatunnel-pipeline"},"Seatunnel Pipeline"),(0,l.kt)("p",null,"\u6211\u4eec\u4ec5\u9700\u8981\u7f16\u5199\u4e00\u4e2aSeatunnel Pipeline\u7684\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5305\u62ec\u56db\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u662fSpark\u3001Input\u3001filter\u548cOutput\u3002"),(0,l.kt)("h4",{id:"spark"},"Spark"),(0,l.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u662fSpark\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u4e3b\u8981\u914d\u7f6eSpark\u6267\u884c\u65f6\u6240\u9700\u7684\u8d44\u6e90\u5927\u5c0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark {\n  // \u8fd9\u4e2a\u914d\u7f6e\u5fc5\u9700\u586b\u5199\n  spark.sql.catalogImplementation = "hive"\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n')),(0,l.kt)("h4",{id:"input"},"Input"),(0,l.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u5b9a\u4e49\u6570\u636e\u6e90\uff0c\u5982\u4e0b\u662f\u4eceHive\u6587\u4ef6\u4e2d\u8bfb\u53d6text\u683c\u5f0f\u6570\u636e\u7684\u914d\u7f6e\u6848\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'input {\n    hive {\n        pre_sql = "select * from access.nginx_msg_detail"\n        table_name = "access_log"\n    }\n}\n')),(0,l.kt)("p",null,"\u770b\uff0c\u5f88\u7b80\u5355\u7684\u4e00\u4e2a\u914d\u7f6e\u5c31\u53ef\u4ee5\u4eceHive\u4e2d\u8bfb\u53d6\u6570\u636e\u4e86\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"pre_sql"),"\u662f\u4eceHive\u4e2d\u8bfb\u53d6\u6570\u636eSQL\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"table_name"),"\u662f\u5c06\u8bfb\u53d6\u540e\u7684\u6570\u636e\uff0c\u6ce8\u518c\u6210\u4e3aSpark\u4e2d\u4e34\u65f6\u8868\u7684\u8868\u540d\uff0c\u53ef\u4e3a\u4efb\u610f\u5b57\u6bb5\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5fc5\u987b\u4fdd\u8bc1hive\u7684metastore\u662f\u5728\u670d\u52a1\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u5728Cluster\u3001Client\u3001Local\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\uff0c\u5fc5\u987b\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),"\u6587\u4ef6\u7f6e\u4e8e\u63d0\u4ea4\u4efb\u52a1\u8282\u70b9\u7684$HADOOP_CONF\u76ee\u5f55\u4e0b"),(0,l.kt)("h4",{id:"filter"},"Filter"),(0,l.kt)("p",null,"\u5728Filter\u90e8\u5206\uff0c\u8fd9\u91cc\u6211\u4eec\u914d\u7f6e\u4e00\u7cfb\u5217\u7684\u8f6c\u5316\uff0c\u6211\u4eec\u8fd9\u91cc\u628a\u4e0d\u9700\u8981\u7684minute\u548chour\u5b57\u6bb5\u4e22\u5f03\u3002\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u8bfb\u53d6Hive\u7684\u65f6\u5019\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"pre_sql"),"\u4e0d\u8bfb\u53d6\u8fd9\u4e9b\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'filter {\n    remove {\n        source_field = ["minute", "hour"]\n    }\n}\n')),(0,l.kt)("h4",{id:"output"},"Output"),(0,l.kt)("p",null,"\u6700\u540e\u6211\u4eec\u5c06\u5904\u7406\u597d\u7684\u7ed3\u6784\u5316\u6570\u636e\u5199\u5165ClickHouse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'output {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "nginx_log"\n        fields = ["date", "datetime", "hostname", "url", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,l.kt)("h3",{id:"running-seatunnel"},"Running Seatunnel"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u4e0a\u8ff0\u56db\u90e8\u5206\u914d\u7f6e\u7ec4\u5408\u6210\u4e3a\u6211\u4eec\u7684\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"config/batch.conf"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim config/batch.conf\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  // \u8fd9\u4e2a\u914d\u7f6e\u5fc5\u9700\u586b\u5199\n  spark.sql.catalogImplementation = "hive"\n}\ninput {\n    hive {\n        pre_sql = "select * from access.nginx_msg_detail"\n        table_name = "access_log"\n    }\n}\nfilter {\n    remove {\n        source_field = ["minute", "hour"]\n    }\n}\noutput {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd0\u884c Seatunnel\uff0c\u5373\u53ef\u5c06\u6570\u636e\u5199\u5165ClickHouse\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5\u672c\u5730\u6a21\u5f0f\u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Seatunnel \u5c06Hive\u4e2d\u7684\u6570\u636e\u5bfc\u5165ClickHouse\u4e2d\u3002\u4ec5\u4ec5\u901a\u8fc7\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4fbf\u53ef\u5feb\u901f\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\uff0c\u65e0\u9700\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\uff0c\u5341\u5206\u7b80\u5355\u3002"),(0,l.kt)("p",null,"\u5e0c\u671b\u4e86\u89e3 Seatunnel \u4e0eClickHouse\u3001Elasticsearch\u3001Kafka\u3001Hadoop\u7ed3\u5408\u4f7f\u7528\u7684\u66f4\u591a\u529f\u80fd\u548c\u6848\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u5b98\u7f51 ",(0,l.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,l.kt)("p",null,"-- Power by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}m.isMDXComponent=!0},4442:function(e,n,t){n.Z=t.p+"assets/images/hive-logo-c9aedd90b5ea9668c87fe25ad92a8e6c.png"}}]);