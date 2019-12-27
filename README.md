<center><h2>文档说明</h2></center>
## 说明

*  文档内容主要为自然资源开发部相关说明文档
*  基于markdown编写整个项目
*  文档查看地址
    1. 内网： http://192.168.10.103:3000/
    2. 外网： http://www.aiwandoudou.com/doc/

## 已抽取模块[jar]
- [x]  logStatistics [logStatisticsServiceInterface.jar/logStatisticsService.jar]

- [x]  jobschedule[jobscheduleInterface.jar/jobscheduleService.jar]
- [x]  codedict[codedictService.jar/codedictServiceInterface.jar]
- [x]  customizeServ[customizeServService.jar/codedictServiceInterface.jar]

## 替代jar文件
```html
<?xml version="1.0"?>
     <project xmlns="http://maven.apache.org/POM/4.0.0"
              xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
         <modelVersion>4.0.0</modelVersion>
     
         <properties>
             <gdbdc.version>2.6.14</gdbdc.version>
         </properties>
         <groupId>com.southgis.ibase.demo</groupId>
         <artifactId>demo</artifactId>
         <name>使用替换jar</name>
     
         <dependencies>
             <!--        已抽取     -->
             <dependency>
                 <groupId>com.southgis.ibase.loganalyse</groupId>
                 <artifactId>loganalyseServiceInterface</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
             <dependency>
                 <groupId>com.southgis.ibase.loganalyse</groupId>
                 <artifactId>loganalyseService</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
     
     
             <!--        已抽取     -->
             <dependency>
                 <groupId>com.southgis.ibase.jobschedule</groupId>
                 <artifactId>jobscheduleInterface</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
             <dependency>
                 <groupId>com.southgis.ibase.jobschedule</groupId>
                 <artifactId>jobscheduleService</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
     
     
             <!--        已抽取     -->
             <dependency>
                 <groupId>com.southgis.ibase.codedict</groupId>
                 <artifactId>codedictService</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
             <dependency>
                 <groupId>com.southgis.ibase.codedict</groupId>
                 <artifactId>codedictServiceInterface</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
     
     
             <!--        已抽取     -->
             <dependency>
                 <groupId>com.southgis.ibase.customizeServ</groupId>
                 <artifactId>customizeServService</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
             <dependency>
                 <groupId>com.southgis.ibase.codedict</groupId>
                 <artifactId>codedictServiceInterface</artifactId>
                 <version>${gdbdc.version}</version>
             </dependency>
             <!--        新增抽取jar包     -->
     
         </dependencies>
     </project>


```




