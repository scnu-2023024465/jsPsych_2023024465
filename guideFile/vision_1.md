# <center><font face="黑体">**使用jsPsych编写心理学实验程序**</font></center>
## <center>Self-Referential Encoding Task (SRET)</center>
***
### 1.为什么要使用jsPsych？
<p style="text-indent: 2em;">jsPsych 相比于传统的心理学实验软件（如 E-Prime）具有几个显著的优点：</p>

- 开放性与灵活性： jsPsych 是基于 JavaScript 的开源库，允许用户在开发和定制实验时具有更大的灵活性和控制力。用户可以自由地编写和修改代码，以适应特定的实验需求和研究设计。

- 跨平台兼容性： jsPsych 运行在 Web 浏览器中，因此能够跨多个操作系统和设备使用，无需安装额外的软件或依赖。

- 社区支持与扩展性： jsPsych 有一个活跃的社区支持，提供丰富的插件和扩展功能，使得用户可以轻松地集成新的功能和实验模块。

- 成本效益： 作为开源软件，jsPsych 免费提供使用，没有额外的许可费用。这对于预算有限的研究项目尤为有利。

- 在线实验的支持： jsPsych 支持在在线环境中运行实验，这在全球化研究合作和大规模数据收集方面尤为重要。

<p style="text-indent: 2em;">总之，jsPsych 的优势在于其开放性、灵活性和跨平台的特性，使得它成为现代心理学研究中一个强大且受欢迎的工具。</p>

***
### 2.什么是自我参照编码任务(Self-Referential Encoding Task, SRET)？
<p style="text-indent: 2em;">Self-Referential Encoding Task (SRET) 是一个经典的心理学实验范式（学习-再认范式），用于研究个体如何处理与自我相关的信息。在 SRET 中，被试被要求评估一系列描述性的词语，判断这些词语是否能够描述自己。这种任务被认为能够调动被试的自我注意和自我认知过程，因此被广泛用于探索自我概念和自我感知的心理机制。</p>

<p style="text-indent: 2em;">以下是实验的基本流程：</p>
<p class="title2">（1）实验说明页</p>
<p style="text-indent: 2em;">实验开始时，参与者会看到一个说明页，解释任务的整体流程和要求。他们需要按下键盘上的特定键（如“q”键）来继续到下一阶段。</p>
<p class="title2">（2）学习阶段</p>

  - 每个试次开始时，屏幕中央会显示一个注视点（+），持续500毫秒，用来引导注意力。
  - 注视点消失后，屏幕会显示一个人格特质形容词（例如：“友好”，“外向”等），持续2000毫秒。参与者需要根据显示的形容词迅速判断其是否能描述自己，如果是，则按下键盘上的“F”键，否则按下“J”键。
<p class="title2">（3）再认阶段</p>

- 在学习阶段结束后，需要继续完成再认阶段，用来检验参与者对之前呈现过的人格特质形容词的记忆。
- 每个试次开始时，屏幕中央会显示一个注视点（+），持续500毫秒，用来引导注意力。
- 注视点消失后，屏幕会显示一个人格特质形容词（例如：“友好”，“内向”等），参与者需要判断每个形容词是否在学习阶段中出现过。如果是，则按下键盘上的“F”键，否则按下“J”键。
<p class="title2">（4）数据收集阶段</p>

- 再认阶段结束后则实验完全结束。JsPsych会再次自动收集和保存实验的再认阶段数据。
- 结果包括对参与者在学习和再认任务中的准确性和反应时间的分析。

***
### 3.用什么工具进行jsPsych的编写？
<p style="text-indent: 2em;">使用VS Code编写JsPsych程序有几个显著的优点：</p>

- 集成开发环境（IDE）支持：VS Code提供了强大的代码编辑功能，包括语法高亮、代码补全、错误检查等，这些功能有助于减少编程错误并提高编码效率。
- 插件生态系统：VS Code拥有丰富的插件生态系统，可以通过安装适合的插件来增强开发体验。例如，可以安装JavaScript和HTML相关的插件，以便更好地支持JsPsych实验的开发和调试。
- 集成的终端窗口：VS Code内置了终端窗口，可以直接在编辑器中执行命令，比如启动本地服务器来预览JsPsych实验的HTML页面。
- 版本控制：VS Code集成了版本控制功能，如Git，可以方便地管理和追踪代码的变更，同时支持团队协作和代码版本管理。
- 轻量和快速：相比一些较为臃肿的IDE，VS Code是一款轻量级的编辑器，启动速度快，占用资源少，适合于快速开发和调试JsPsych实验。
<p style="text-indent: 2em;">综上所述，使用VS Code编写JsPsych程序能够提供高效、便捷的开发环境，有助于研究人员和开发者更好地设计、实现和管理心理学实验。</p>
  
***
### 4.学习和编写jsPsych，可以参考哪些教程？
<p style="text-indent: 2em;">除本教程外，还建议参考以下教程：</p>

<p class="title2">(1) <a href="https://www.jspsych.org/latest/">jsPsych官网</a></p>
<p style="text-indent: 2em;">JsPsych官网提供了多方面的资源和支持来帮助编写JsPsych程序。以下是官网提供的主要帮助内容及其特点：</p>

- **官方文档**：API参考：详细的API文档包含了JsPsych的各个模块、函数和参数的说明。开发者可以查看每个插件的功能、用法以及示例代码。
- **入门指南**：适合初学者的教程，介绍JsPsych的基本概念、安装步骤和简单的实验设计方法。
- **教程**：详细的教程带领用户从基础到进阶，逐步学习如何使用JsPsych构建不同类型的心理学实验。包括逐步指导的实验示例和代码片段。
- **视频教程**：一些教程可能包含视频，帮助用户更直观地理解JsPsych的功能和用法。
- **插件库**：提供了大量现成的插件，可以直接用于各种实验任务，如问卷调查、反应时间测试、视觉任务等。每个插件的页面包括使用说明、参数设置、示例代码以及可能的用例。
- **插件开发指南**：指导用户如何创建自定义插件，适合有特殊需求的用户进行插件扩展或开发新功能。
- **示例代码**：提供了多种实验设计的示例代码，用户可以参考这些示例来学习如何实现特定的实验任务。示例代码涵盖了从简单到复杂的各种实验设计场景，帮助用户快速上手和进行实验设计。
- **社区论坛**：JsPsych有一个Google Groups论坛，用户可以在这里提问、分享经验和解决问题。这个社区由其他JsPsych用户、开发者和维护者组成，提供了一个交流和讨论的平台。
- **GitHub Issues**：在GitHub上，用户可以提交问题、报告bug、请求功能改进，并参与讨论。维护者和社区成员会在这里进行问题解决和功能开发的协作。
- **FAQ**：针对用户在使用JsPsych过程中可能遇到的一些常见问题提供解答，帮助解决初学者常见的疑问。
- **更新日志**：提供了JsPsych各个版本的更新日志，用户可以查看到新功能的发布、修复的bug以及其他重要的更改信息。
- **实验资源库**：这里汇集了用户分享的实验代码、实验设计文档等资源，供大家参考和学习。
- **API 文档**：API参考：详细的API文档包括了JsPsych库中的每一个方法、对象、属性等的详细说明。
 -**API文档示例**：每个API条目包含代码示例，帮助用户理解如何使用这些功能。

<p style="text-indent: 2em;">总之，通过这些资源，JsPsych官网不仅提供了详细的技术文档和开发工具，还为用户提供了丰富的学习材料和社区支持，帮助开发者和研究人员有效地编写和调试JsPsych实验程序。</p>

<p class="title2">(2) <a href="https://shaobin-jiang.github.io/jsPsych-Chinese-Documentation/latest/">jsPsych官网-中文翻译</a></p>
<p style="text-indent: 2em;">该网站由国人进行翻译，是初学jsPsych非常好用的入门工具！但请注意，该翻译的版本并非最新版，仅供理解，实际使用代码时建议在官网原址进行复制等操作。</p>
<p style="text-indent: 2em;">此外，该作者录制了<a href="https://www.bilibili.com/video/BV1Qs4y1y7c9/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click&vd_source=03a8d3ea37f928ef60ff3bf01ebf4c0a">jsPsych入门的详细教程</a>，还包括HTML、JavaScrip、CSS的原理讲解，非常适合初学者观看。</p>

<p class="title2">(3) <a href="https://www.zhihu.com/people/wang-dan-2-23">知乎教程：案例教学</a></p>
<p style="text-indent: 2em;">该作者共提供了<a href="https://zhuanlan.zhihu.com/p/668890438">基础篇</a>、<a href="https://zhuanlan.zhihu.com/p/670760264">进阶篇</a>、<a href="https://zhuanlan.zhihu.com/p/703580775">高级篇</a>三篇教程，附带案例、代码注释等详细信息，可参考对照</p>

<p class="title2">(4) <a href="https://openai.com/">Chatgpt</a></p>
<p style="text-indent: 2em;">Chatgpt等工具非常适合用于辅助代码编写，这里附上一个<a href="https://k5ms77k0o1.feishu.cn/wiki/wikcnJyI9wsyjyBc8xiDgv0cY8b">教程网站</a>，该网站中包含关于此类工具详细的介绍与应用方式等内容，可参考对照。</p>

***
### 5.现在让我们进入正式的案例教学
<p class="title2">(1)基础设置</p>

<p style="text-indent: 2em;">为了方便后续的修改，我们要做的第一步就是将样式写入CSS文件、实验试次写入JS文件，再从外部引入HTML文件中，避免HTML文件内容过于杂乱。</p>

- 在Vscode中创建SRET.html、main.js、main.css文件。
  ![图片说明](.\1.png)![图片说明](.\2.png)
- 在html文件中，输入html:5回车搭建HTML基础框架。
  ![图片说明](.\3.png)
- 在html文件中，设定一些需要用到的插件，并引入刚刚创建的js文件与css文件。需要用到的插件可在jsPsych官网中查找引入方法与使用方法。引入js文件时记得添加“defer”属性。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Self-Referential Encoding Task</title>
    <!-- 设定一些需要用到的插件 -->
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <link href="https://unpkg.com/jspsych@7.3.4/css/jspsych.css" rel="stylesheet" type="text/css" /><script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-button-response@1.2.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-survey@1.0.1"></script>
    <link rel="stylesheet" href="https://unpkg.com/@jspsych/plugin-survey@1.0.1/css/survey.css">
    <script src="https://unpkg.com/@jspsych/plugin-survey-likert@1.1.3"></script>
    <!-- 导入样式和试次文件 -->
    <script src="./main.js" defer></script>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
</body>
</html>
```
- 至此，html文件已完成。

<p class="title2">(2)实验试次框架搭建</p>

- 首先进行初始化，并将被试的反应信息在实验结束后自动保存为data.csv；并显示进度条。
```
//初始化jsPsych
let jsPsych = initJsPsych({
    on_finish: function() {
      jsPsych.data.get().localSave('csv','data.csv');
    },
    show_progress_bar: true,
    message_progress_bar: '实验进度：'
  });
```
- 接着，我们需要收集被试的基本个人信息与PHQ-9量表。
```
//1.个人信息与量表填写
//首先进行基础信息的填写
let  questionnaire1= {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        title: '基本个人信息',
        completeText:  '提交',
        pageNextText:  '下一题',
        pagePrevText: '上一题',
        pages: [
          {
            name: 'page1',
            elements: [
                {
                    type: 'text',
                    title: '编号：', 
                    name: 'numbers', 
                    isRequired: true,
                    inputType: 'number',
                    min: 0,
                    max: 100,
                    defaultValue: 0
                  }, 
                {
                  type: 'text',
                  title: '年龄：', 
                  name: 'age', 
                  isRequired: true,
                  inputType: 'number',
                  min: 0,
                  max: 100,
                  defaultValue: 0
                }
              ]
          },
          {
            name: 'page2',
            elements: [
              {
                type: 'radiogroup',
                title: '性别：', 
                choices: ['男', '女'],
                colCount: 0,
                name: 'sexual',
              }
            ]
          }
        ]
      }
    };


//然后完成PHQ-9量表填写
let likert_scale = [
    '没有', 
    '有几天', 
    '一半以上时间', 
    '几乎天天', 
    ];
let questionnaire2 = {
    type: jsPsychSurveyLikert,
    preamble: '在过去的两周里，您生活中以下症状出现的频率有多少？',
    questions: [
        {prompt: '做事时提不起劲或没有兴趣', name: 'Q1', labels: likert_scale, required:true},
        {prompt: '感到心情低落、沮丧或绝望', name: 'Q2', labels: likert_scale, required:true},
        {prompt: '入睡困难、睡不安或睡得过多', name: 'Q3', labels: likert_scale, required:true},
        {prompt: '感觉疲惫或没有活力', name: 'Q4', labels: likert_scale, required:true},
        {prompt: '食欲不振或吃太多肉', name: 'Q5', labels: likert_scale, required:true},
        {prompt: '觉得自己很糟或觉得自己很失败，或让自己、家人失望', name: 'Q6', labels: likert_scale, required:true},
        {prompt: '对事物专注有困难，例如看报纸或看电视时', name: 'Q7', labels: likert_scale, required:true},
        {prompt: '行动或说话速度缓慢到别人已经觉察?或正好相反，烦躁或坐立不安、动来动去的情况更胜于平常', name: 'Q8', labels: likert_scale, required:true},
        {prompt: '有不如死掉或用某种方式伤害自己的念头', name: 'Q9', labels: likert_scale, required:true}
    ]
};
```
- 然后开始正式实验。
- 正式实验包括开始与结束的指导语页面、注视点页面、刺激呈现与被试反应页面、空屏页面。
- 首先创建指导语页面，该页面的时间无限，按“Q”进入到下一个页面。
```
//2.正式实验部分
//创建指导语试次
let intro1 = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '欢迎参加本次实验！请您按“F11”进入全屏，实验需在全屏状态下进行，期间请勿按“Esc”退出。<br>本实验共包含两个阶段，现在是学习阶段。<br>屏幕上首先会呈现一个注视点“+”，然后会出现一个形容词，您需要尽可能快速地判断该词是否能够描述你自己，<br>如果符合自我描述，请按“F”，否则请按“J”。<br>若您已经明白上述这段话，请按"Q"键进入学习阶段。',
      choices:['q']
};

let intro2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '学习阶段已结束，现在是再认阶段。<br>屏幕上首先会呈现一个注视点“+”，然后会出现一个形容词，您需要尽可能快速地判断该词是否在先前出现过，<br>如果出现过，请按“F”，否则请按“J”。<br>若您已经明白上述这段话，请按"Q"键进入再认阶段。',
    choices:['q']
};

let goodbye = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '实验已结束。请按“Esc”退出全屏。',
    choices: 'NO_KEYS',
    trial_duration:'1500'
};
```
- 最后是本实验最核心的部分，即刺激呈现并要求被试按键的页面设置。
- 首先设置注视点屏、学习阶段和再认阶段的刺激屏、空屏（1000毫秒），再组合起来。
- 注视点呈现500毫秒，无需被试反应。
- 刺激呈现页面需要被试按键反应（f或j），被试若无反应则最多2秒后消失，刺激词随机呈现。
- 这里给注视点与刺激词标记，是为了方便后续将其使用弹性布局居中。
```
//创建学习阶段与再认阶段
//创建注视点屏、学习阶段和再认阶段刺激屏、空屏并组合。
let study_timeline = {
  timeline:[
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:'<p class="stim">+</p>',
      trial_duration:'500',
      choices:'NO_KEYS'
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:function(){
        let html = 
        `<p class="stim">${jsPsych.timelineVariable('word1')}</p>`;
        return html
      },
      choices: ['f', 'j'],
      prompt:'该词是否能够描述你自己？<br>是按“F”，否按“J”'
    }
  ],
  timeline_variables: [
    {word1:'刺激词1'},
    {word1:'刺激词2'},
    {word1:'刺激词3'}
  ],
  randomize_order: true,
  trial_duration:'2000',
  post_trial_gap: 1000
};

let recog_timeline = {
  timeline:[
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:'<p class="stim">+</p>',
      trial_duration:'500',
      choices:'NO_KEYS'
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:function(){
        let html = 
        `<p class="stim">${jsPsych.timelineVariable('word2')}</p>`;
        return html
      },
      choices: ['f', 'j'],
      prompt:'该词是否能够描述你自己？<br>是按“F”，否按“J”'
    }
  ],
  timeline_variables: [
    {word2:'刺激词1'},
    {word2:'刺激词2'},
    {word2:'刺激词3'},
    {word2:'刺激词4'},
    {word2:'刺激词5'},
    {word2:'刺激词6'}
  ],
  randomize_order: true,
  trial_duration:'2000',
  post_trial_gap: 1000
};
```
- 最后，将整个程序的时间线串起来。
```
//最后，把需要运行的试次添加到数组中并传给.run()，该数组叫时间线
jsPsych.run([questionnaire1, questionnaire2, intro1, study_timeline, intro2, recog_timeline, goodbye]);
```
- 至此，JS文件已设置完毕。

<p class="title2">(3)实验样式修改</p>

- 最后一步是在css文件中设置整个程序呈现的样式，如位置、字体颜色、背景色等。
- 心理学实验一般背景颜色为黑色，文字等刺激为白色。
```
/* 背景为黑色，文字为白色 */
body {
    background-color: black;
    color: white;
};
```
- 其次，心理学实验除必要设置外，一般实验刺激都呈现在屏幕正中央，以刺激为中心再排列其他元素。这里需要用到弹性布局。我们先前将注视点“+”与刺激词均标记为class="stim"。
```
/* 弹性布局 */
.stim{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
};
```
- 至此，css文件已设置完毕。
- 在Vscode中安装open in browser插件后，打开html文件，按住Alt+B即可开始实验。
- 本教程为通用型教程，无法详细说明每一个插件及其属性的用法，可按需求修改各项参数，若想新增参数，请参考官网教程。