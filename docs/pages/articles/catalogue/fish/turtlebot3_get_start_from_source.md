# Turtlebot3-Nav2源码编译导航测试

大家好，我是小鱼，之前发过通过apt安装的ROS2-turtlebot3今天我们来编译源码跑跑，方便后续对源码进行学习。

本篇教程所用平台

- Ubuntu20.04
- ROS2 Foxy

### 一、源码下载与编译工程
前提是装好ROS2（没装的小伙伴可以参考小鱼的一行代码安装ROS2），接着我们就可以下载三个官方仓库的源码了。

因为从github下载慢，大家可以到鱼香ROS官网使用github代理

打开终端，创建ROS2工作空间并下载源码

```shell
mkdir -p turtlebot3_ws/src
cd turtlebot3_ws/
git clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3.git src/turtlebot3 -b foxy-devel
git clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git src/turtlebot3_msgs -b foxy-devel
git clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3_simulations.git src/turtlebot3_simulations -b foxy-devel
```
下载完成后就像需要安装下依赖，小鱼使用rosdepc来安装依赖
记得是在工作空间下运行
```shell
rosdepc install --from-paths src --ignore-src  -y
```

接着就可编译了

```shell
colcon build
```

## 二、开始建图
接着上面的我们就可以继续建立地图

在我们刚刚编译好的工作空间source下，接着配置gazebo模型位置

这句话其实是指出来gazebo所需要的models所在的位置

```bash
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:`ros2 pkg \
prefix turtlebot3_gazebo \
`/share/turtlebot3_gazebo/models/
```
分别打开三个终端
终端1  source并启动gazebo仿真

```
source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
```
终端2 source并启动建图

```
source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_cartographer cartographer.launch.py use_sim_time:=True
```
终端3 source,启动键盘控制节点

```
source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 run turtlebot3_teleop teleop_keyboard
```
![建好的地图](https://img-blog.csdnimg.cn/9b48bf5d6d5542c7b33736585f4c3694.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16)保存地图

打开终端，运行指令

```bash
ros2 run nav2_map_server map_saver_cli -f turtlebot2_map
```

## 三、根据已有地图启动导航程序
### 3.1 启动导航程序

关闭上面的建图和键盘控制（Ctrl+C）

接着运行导航程序，这里注意要指向刚刚的map地图位置才行
```bash
source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_navigation2 navigation2.launch.py \
use_sim_time:=true map:="you map address".yaml
```
地图位置可以使用相相对目录，比如小鱼这里

```bash
ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:=true map:=map/my_map.yaml 
```

## 5.2 初始化机器人的位置
启动后，机器人最初并不知道它在哪里，你会看到终端一直在报错，没关系，初始下位置就好。因为默认情况下，导航程序等待您给出一个大致的起始位置。

我们必须手动机器人的初始位置和方向。此方法应用于 AMCL 定位算法。

以通过点击RVIZ上的位置估计按钮初始化
![在这里插入图片描述](https://img-blog.csdnimg.cn/6116582ec1bd4704ac56e3102e941ba4.png)
- 单击"2D 姿势估计"按钮
- 单击机器人所在的地图中的近似点，拖动箭头指出机器人所面朝的方向

如果一次搞定最好不过，不行可以多搞机器人，在导航过程中也可以使用这种方法来优化机器人位置的精准性。

设置完成初始化为自后，tf树就搞定了，接着就可以让机器人出发了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/a7a3a201e1d0425da56bda34aa5b8d7f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16)

### 5.3 给定目标点动起来
同样使用RVIZ来操作

- 单击 2D 导航目标按钮（也位于顶部菜单中）
- 单击地图中的特定点以设置目标位置，并将光标拖动到 TurtleBot 最后应该面对的方向

>绿色小箭头群是适应性蒙特卡洛定位 （AMCL）的可视化。每个绿色箭头代表机器人的可能位置和方向。请注意，在开始时，其分布分布分布在整个地图上。一旦机器人移动箭头得到更新，因为该算法纳入了新的测量。在运动过程中，箭头的分布变得不那么混乱，并越来越定居到机器人的位置，这最终意味着算法越来越确定机器人在地图中的姿势。

![result](https://img-blog.csdnimg.cn/23351e7520654b978b09f5388fab839e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16)

参考文档：
- https://ros2-industrial-workshop.readthedocs.io/en/latest/_source/navigation/ROS2-Turtlebot.html