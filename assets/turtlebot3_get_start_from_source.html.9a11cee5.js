import{e as s}from"./app.5f9b41ed.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},n=s(`<h1 id="turtlebot3-nav2\u6E90\u7801\u7F16\u8BD1\u5BFC\u822A\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#turtlebot3-nav2\u6E90\u7801\u7F16\u8BD1\u5BFC\u822A\u6D4B\u8BD5" aria-hidden="true">#</a> Turtlebot3-Nav2\u6E90\u7801\u7F16\u8BD1\u5BFC\u822A\u6D4B\u8BD5</h1><p>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u5C0F\u9C7C\uFF0C\u4E4B\u524D\u53D1\u8FC7\u901A\u8FC7apt\u5B89\u88C5\u7684ROS2-turtlebot3\u4ECA\u5929\u6211\u4EEC\u6765\u7F16\u8BD1\u6E90\u7801\u8DD1\u8DD1\uFF0C\u65B9\u4FBF\u540E\u7EED\u5BF9\u6E90\u7801\u8FDB\u884C\u5B66\u4E60\u3002</p><p>\u672C\u7BC7\u6559\u7A0B\u6240\u7528\u5E73\u53F0</p><ul><li>Ubuntu20.04</li><li>ROS2 Foxy</li></ul><h3 id="\u4E00\u3001\u6E90\u7801\u4E0B\u8F7D\u4E0E\u7F16\u8BD1\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6E90\u7801\u4E0B\u8F7D\u4E0E\u7F16\u8BD1\u5DE5\u7A0B" aria-hidden="true">#</a> \u4E00\u3001\u6E90\u7801\u4E0B\u8F7D\u4E0E\u7F16\u8BD1\u5DE5\u7A0B</h3><p>\u524D\u63D0\u662F\u88C5\u597DROS2\uFF08\u6CA1\u88C5\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u53C2\u8003\u5C0F\u9C7C\u7684\u4E00\u884C\u4EE3\u7801\u5B89\u88C5ROS2\uFF09\uFF0C\u63A5\u7740\u6211\u4EEC\u5C31\u53EF\u4EE5\u4E0B\u8F7D\u4E09\u4E2A\u5B98\u65B9\u4ED3\u5E93\u7684\u6E90\u7801\u4E86\u3002</p><p>\u56E0\u4E3A\u4ECEgithub\u4E0B\u8F7D\u6162\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5230\u9C7C\u9999ROS\u5B98\u7F51\u4F7F\u7528github\u4EE3\u7406</p><p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u521B\u5EFAROS2\u5DE5\u4F5C\u7A7A\u95F4\u5E76\u4E0B\u8F7D\u6E90\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p turtlebot3_ws/src
<span class="token builtin class-name">cd</span> turtlebot3_ws/
<span class="token function">git</span> clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3.git src/turtlebot3 -b foxy-devel
<span class="token function">git</span> clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git src/turtlebot3_msgs -b foxy-devel
<span class="token function">git</span> clone https://ghproxy.com/https://github.com/ROBOTIS-GIT/turtlebot3_simulations.git src/turtlebot3_simulations -b foxy-devel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\u5C31\u50CF\u9700\u8981\u5B89\u88C5\u4E0B\u4F9D\u8D56\uFF0C\u5C0F\u9C7C\u4F7F\u7528rosdepc\u6765\u5B89\u88C5\u4F9D\u8D56 \u8BB0\u5F97\u662F\u5728\u5DE5\u4F5C\u7A7A\u95F4\u4E0B\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rosdepc <span class="token function">install</span> --from-paths src --ignore-src  -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\u5C31\u53EF\u7F16\u8BD1\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>colcon build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u5F00\u59CB\u5EFA\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F00\u59CB\u5EFA\u56FE" aria-hidden="true">#</a> \u4E8C\u3001\u5F00\u59CB\u5EFA\u56FE</h2><p>\u63A5\u7740\u4E0A\u9762\u7684\u6211\u4EEC\u5C31\u53EF\u4EE5\u7EE7\u7EED\u5EFA\u7ACB\u5730\u56FE</p><p>\u5728\u6211\u4EEC\u521A\u521A\u7F16\u8BD1\u597D\u7684\u5DE5\u4F5C\u7A7A\u95F4source\u4E0B\uFF0C\u63A5\u7740\u914D\u7F6Egazebo\u6A21\u578B\u4F4D\u7F6E</p><p>\u8FD9\u53E5\u8BDD\u5176\u5B9E\u662F\u6307\u51FA\u6765gazebo\u6240\u9700\u8981\u7684models\u6240\u5728\u7684\u4F4D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GAZEBO_MODEL_PATH</span><span class="token operator">=</span><span class="token variable">$GAZEBO_MODEL_PATH</span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">\`</span>ros2 pkg <span class="token punctuation">\\</span>
prefix turtlebot3_gazebo <span class="token punctuation">\\</span>
<span class="token variable">\`</span></span>/share/turtlebot3_gazebo/models/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5206\u522B\u6253\u5F00\u4E09\u4E2A\u7EC8\u7AEF \u7EC8\u7AEF1 source\u5E76\u542F\u52A8gazebo\u4EFF\u771F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7EC8\u7AEF2 source\u5E76\u542F\u52A8\u5EFA\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_cartographer cartographer.launch.py use_sim_time:=True
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7EC8\u7AEF3 source,\u542F\u52A8\u952E\u76D8\u63A7\u5236\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source install/setup.bash 
export TURTLEBOT3_MODEL=burger
ros2 run turtlebot3_teleop teleop_keyboard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://img-blog.csdnimg.cn/9b48bf5d6d5542c7b33736585f4c3694.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16" alt="\u5EFA\u597D\u7684\u5730\u56FE">\u4FDD\u5B58\u5730\u56FE</p><p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FD0\u884C\u6307\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ros2 run nav2_map_server map_saver_cli -f turtlebot2_map
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4E09\u3001\u6839\u636E\u5DF2\u6709\u5730\u56FE\u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6839\u636E\u5DF2\u6709\u5730\u56FE\u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F" aria-hidden="true">#</a> \u4E09\u3001\u6839\u636E\u5DF2\u6709\u5730\u56FE\u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F</h2><h3 id="_3-1-\u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F" aria-hidden="true">#</a> 3.1 \u542F\u52A8\u5BFC\u822A\u7A0B\u5E8F</h3><p>\u5173\u95ED\u4E0A\u9762\u7684\u5EFA\u56FE\u548C\u952E\u76D8\u63A7\u5236\uFF08Ctrl+C\uFF09</p><p>\u63A5\u7740\u8FD0\u884C\u5BFC\u822A\u7A0B\u5E8F\uFF0C\u8FD9\u91CC\u6CE8\u610F\u8981\u6307\u5411\u521A\u521A\u7684map\u5730\u56FE\u4F4D\u7F6E\u624D\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> install/setup.bash 
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TURTLEBOT3_MODEL</span><span class="token operator">=</span>burger
ros2 launch turtlebot3_navigation2 navigation2.launch.py <span class="token punctuation">\\</span>
use_sim_time:<span class="token operator">=</span>true map:<span class="token operator">=</span><span class="token string">&quot;you map address&quot;</span>.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5730\u56FE\u4F4D\u7F6E\u53EF\u4EE5\u4F7F\u7528\u76F8\u76F8\u5BF9\u76EE\u5F55\uFF0C\u6BD4\u5982\u5C0F\u9C7C\u8FD9\u91CC</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:<span class="token operator">=</span>true map:<span class="token operator">=</span>map/my_map.yaml 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-2-\u521D\u59CB\u5316\u673A\u5668\u4EBA\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-2-\u521D\u59CB\u5316\u673A\u5668\u4EBA\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> 5.2 \u521D\u59CB\u5316\u673A\u5668\u4EBA\u7684\u4F4D\u7F6E</h2><p>\u542F\u52A8\u540E\uFF0C\u673A\u5668\u4EBA\u6700\u521D\u5E76\u4E0D\u77E5\u9053\u5B83\u5728\u54EA\u91CC\uFF0C\u4F60\u4F1A\u770B\u5230\u7EC8\u7AEF\u4E00\u76F4\u5728\u62A5\u9519\uFF0C\u6CA1\u5173\u7CFB\uFF0C\u521D\u59CB\u4E0B\u4F4D\u7F6E\u5C31\u597D\u3002\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BFC\u822A\u7A0B\u5E8F\u7B49\u5F85\u60A8\u7ED9\u51FA\u4E00\u4E2A\u5927\u81F4\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002</p><p>\u6211\u4EEC\u5FC5\u987B\u624B\u52A8\u673A\u5668\u4EBA\u7684\u521D\u59CB\u4F4D\u7F6E\u548C\u65B9\u5411\u3002\u6B64\u65B9\u6CD5\u5E94\u7528\u4E8E AMCL \u5B9A\u4F4D\u7B97\u6CD5\u3002</p><p>\u4EE5\u901A\u8FC7\u70B9\u51FBRVIZ\u4E0A\u7684\u4F4D\u7F6E\u4F30\u8BA1\u6309\u94AE\u521D\u59CB\u5316 <img src="https://img-blog.csdnimg.cn/6116582ec1bd4704ac56e3102e941ba4.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><ul><li>\u5355\u51FB&quot;2D \u59FF\u52BF\u4F30\u8BA1&quot;\u6309\u94AE</li><li>\u5355\u51FB\u673A\u5668\u4EBA\u6240\u5728\u7684\u5730\u56FE\u4E2D\u7684\u8FD1\u4F3C\u70B9\uFF0C\u62D6\u52A8\u7BAD\u5934\u6307\u51FA\u673A\u5668\u4EBA\u6240\u9762\u671D\u7684\u65B9\u5411</li></ul><p>\u5982\u679C\u4E00\u6B21\u641E\u5B9A\u6700\u597D\u4E0D\u8FC7\uFF0C\u4E0D\u884C\u53EF\u4EE5\u591A\u641E\u673A\u5668\u4EBA\uFF0C\u5728\u5BFC\u822A\u8FC7\u7A0B\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u6765\u4F18\u5316\u673A\u5668\u4EBA\u4F4D\u7F6E\u7684\u7CBE\u51C6\u6027\u3002</p><p>\u8BBE\u7F6E\u5B8C\u6210\u521D\u59CB\u5316\u4E3A\u81EA\u540E\uFF0Ctf\u6811\u5C31\u641E\u5B9A\u4E86\uFF0C\u63A5\u7740\u5C31\u53EF\u4EE5\u8BA9\u673A\u5668\u4EBA\u51FA\u53D1\u4E86\u3002 <img src="https://img-blog.csdnimg.cn/a7a3a201e1d0425da56bda34aa5b8d7f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_5-3-\u7ED9\u5B9A\u76EE\u6807\u70B9\u52A8\u8D77\u6765" tabindex="-1"><a class="header-anchor" href="#_5-3-\u7ED9\u5B9A\u76EE\u6807\u70B9\u52A8\u8D77\u6765" aria-hidden="true">#</a> 5.3 \u7ED9\u5B9A\u76EE\u6807\u70B9\u52A8\u8D77\u6765</h3><p>\u540C\u6837\u4F7F\u7528RVIZ\u6765\u64CD\u4F5C</p><ul><li>\u5355\u51FB 2D \u5BFC\u822A\u76EE\u6807\u6309\u94AE\uFF08\u4E5F\u4F4D\u4E8E\u9876\u90E8\u83DC\u5355\u4E2D\uFF09</li><li>\u5355\u51FB\u5730\u56FE\u4E2D\u7684\u7279\u5B9A\u70B9\u4EE5\u8BBE\u7F6E\u76EE\u6807\u4F4D\u7F6E\uFF0C\u5E76\u5C06\u5149\u6807\u62D6\u52A8\u5230 TurtleBot \u6700\u540E\u5E94\u8BE5\u9762\u5BF9\u7684\u65B9\u5411</li></ul><blockquote><p>\u7EFF\u8272\u5C0F\u7BAD\u5934\u7FA4\u662F\u9002\u5E94\u6027\u8499\u7279\u5361\u6D1B\u5B9A\u4F4D \uFF08AMCL\uFF09\u7684\u53EF\u89C6\u5316\u3002\u6BCF\u4E2A\u7EFF\u8272\u7BAD\u5934\u4EE3\u8868\u673A\u5668\u4EBA\u7684\u53EF\u80FD\u4F4D\u7F6E\u548C\u65B9\u5411\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728\u5F00\u59CB\u65F6\uFF0C\u5176\u5206\u5E03\u5206\u5E03\u5206\u5E03\u5728\u6574\u4E2A\u5730\u56FE\u4E0A\u3002\u4E00\u65E6\u673A\u5668\u4EBA\u79FB\u52A8\u7BAD\u5934\u5F97\u5230\u66F4\u65B0\uFF0C\u56E0\u4E3A\u8BE5\u7B97\u6CD5\u7EB3\u5165\u4E86\u65B0\u7684\u6D4B\u91CF\u3002\u5728\u8FD0\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u7BAD\u5934\u7684\u5206\u5E03\u53D8\u5F97\u4E0D\u90A3\u4E48\u6DF7\u4E71\uFF0C\u5E76\u8D8A\u6765\u8D8A\u5B9A\u5C45\u5230\u673A\u5668\u4EBA\u7684\u4F4D\u7F6E\uFF0C\u8FD9\u6700\u7EC8\u610F\u5473\u7740\u7B97\u6CD5\u8D8A\u6765\u8D8A\u786E\u5B9A\u673A\u5668\u4EBA\u5728\u5730\u56FE\u4E2D\u7684\u59FF\u52BF\u3002</p></blockquote><p><img src="https://img-blog.csdnimg.cn/23351e7520654b978b09f5388fab839e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6bG86aaZUk9T,size_20,color_FFFFFF,t_70,g_se,x_16" alt="result"></p><p>\u53C2\u8003\u6587\u6863\uFF1A</p><ul><li>https://ros2-industrial-workshop.readthedocs.io/en/latest/_source/navigation/ROS2-Turtlebot.html</li></ul>`,48);function t(l,r){return n}var o=a(e,[["render",t]]);export{o as default};
