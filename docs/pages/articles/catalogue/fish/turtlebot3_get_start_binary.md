# Turtlebot3-Nav2导航图探索-安装版

大家好，我是昨晚熬夜太多脑壳痛的小鱼。今天带大家一起探索一些ROS2+turtlebot3的slam建图。

先上最终效果图
![请添加图片描述](https://img-blog.csdnimg.cn/1bcce0bd54cd42049d1ab704560f55bb.gif)

## 1.安装ROS2

第一步就是要有一个ROS2的环境，这个没有的请打开小鱼的[fishros](https://fishros.com/)网站，选择一行代码安装ROS2进行安装。

## 2.安装turtlebot3
```bash
sudo apt install ros-foxy-turtlebot3*
sudo apt install ros-foxy-cartographer 
```


## 3.开始建图
3.1 配置
```bash
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:`ros2 pkg \
prefix turtlebot3_gazebo \
`/share/turtlebot3_gazebo/models/
```
3.2 启动建图
分别打开三个终端
终端1启动gazebo仿真

```bash
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
```
终端2启动建图

```bash
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_cartographer cartographer.launch.py use_sim_time:=True
```
终端3启动键盘控制节点

```bash
export TURTLEBOT3_MODEL=burger
ros2 run turtlebot3_teleop teleop_keyboard
```
## 4.保存地图
```bash
ros2 run nav2_map_server map_saver_cli -f my_map
```


## 5.根据已有地图启动导航程序
### 5.1 启动导航程序

关闭或者退出上面三个窗口

重新启动gazebo仿真

```bash
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
```

这里注意要指向刚刚的map地图位置才行
```bash
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_navigation2 navigation2.launch.py \
use_sim_time:=true map:="you map address".yaml use_sim_time:=True
```
地图位置可以使用相对目录，比如小鱼这里

```bash
ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:=true map:=map/my_map.yaml 
```


## 5.2 初始化机器人的位置
启动后，机器人最初并不知道它在哪里。默认情况下，导航程序等待您给出一个大致的起始位置。

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

![在这里插入图片描述](https://img-blog.csdnimg.cn/23351e7520654b978b09f5388fab839e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16)


参考文档：
- https://ros2-industrial-workshop.readthedocs.io/en/latest/_source/navigation/ROS2-Turtlebot.html


