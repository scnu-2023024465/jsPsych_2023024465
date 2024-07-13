//初始化jsPsych
let jsPsych = initJsPsych({
    on_finish: function() {
      jsPsych.data.get().localSave('csv','data.csv');
    },  //on_finish即在整个程序完成后进行；程序运行完毕后，自动将被试的按键反应与反应时等信息保存成data.csv。
    show_progress_bar: true,//显示进度条，且名称为“实验进度：”，避免被试不耐烦。
    message_progress_bar: '实验进度：'
  });


//以下代码的框架可通过jsPsych官网以及markdown教程中提及的几个教程中找到。
//基本规则：除文本部分，其他部分的文字、标点符号等均为英文输入状态；let xxx = {};是基础框架，括号内除最后一行外，其余行结束时都需有个逗号作为该行结束。

//1.个人信息与量表填写
//首先进行基础信息的填写
let  questionnaire1= {
    type: jsPsychSurvey,//声明需要用到的插件，官网有关该插件的介绍中提供了需要写进HTML文件的引入代码。
    survey_json: {
        showQuestionNumbers: false,//不显示每道题的题号。
        title: '基本个人信息',//该页的标题。
        completeText:  '提交',//完成questionnaire1的所有题目后按“提交”结束。
        pageNextText:  '继续',//切换成下一页。
        pagePrevText: '返回',//允许被试回过头修改自己的答案。
        pages: [
          {
            name: 'page1',//编号和年龄问题显示在第一页
            elements: [
                {
                    type: 'text',//类型：文本
                    title: '编号：', //题目
                    name: 'numbers',//标签
                    isRequired: true,//是否必答：是。
                    inputType: 'number',//支持输入的类型：数字。
                    min: 0,//支持输入数字的最小值。
                    max: 100,//支持输入数字的最大值。
                    defaultValue: 0//默认框中出现的值，提醒被试这里只用输入数字，无需再输入其他。
                  }, 
                {
                  type: 'text',
                  title: '年龄（岁）：', 
                  name: 'age', 
                  isRequired: true,
                  inputType: 'number',
                  min: 0,
                  max: 100,
                  defaultValue: 0//默认框中出现的值，提醒被试这里只用输入数字，无需再输入“岁”。
                }
              ]
          },
          {
            name: 'page2',
            elements: [
              {
                type: 'radiogroup',//类型：选择
                title: '性别：', 
                choices: ['男', '女'],//可供选择的选项。
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
    type: jsPsychSurveyLikert,//这里使用了李克特量表插件，因此也要在HTML中输入相应的引入代码。
    preamble: '在过去的两周里，您生活中以下症状出现的频率有多少？',//量表的指导语部分，显示在最上方中央。
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
    ]//prompt为注释，此处用于展示量表的各个项目内容；require一样设置为必答。
};




//2.正式实验部分
//创建指导语试次
let intro1 = {
      type: jsPsychHtmlKeyboardResponse,//这是心理学实验中几乎必然需要用到的插件，也需要在HTML中引入。
      stimulus: '欢迎参加本次实验！请您按“F11”进入全屏，实验需在全屏状态下进行，期间请勿按“Esc”退出。<br>本实验共包含两个阶段，现在是学习阶段。<br>屏幕上首先会呈现一个注视点“+”，然后会出现一个形容词，您需要尽可能快速地判断该词是否能够描述你自己，<br>如果符合自我描述，请按“F”，否则请按“J”。<br>若您已经明白上述这段话，请按"Q"键进入学习阶段。',//使用br标签进行换行。
      choices:['q']//仅允许被试按Q键，因为我们希望被试按F11时是针对浏览器的，不应对程序本身产生影响。
};//该插件中，部分设置有默认值，例如无反应时的持续时间默认为无限，指导语的持续时间正好需要无限持续时间，因此可以不用写出该属性。

let intro2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '学习阶段已结束，现在是再认阶段。<br>屏幕上首先会呈现一个注视点“+”，然后会出现一个形容词，您需要尽可能快速地判断该词是否在先前出现过，<br>如果出现过，请按“F”，否则请按“J”。<br>若您已经明白上述这段话，请按"Q"键进入再认阶段。',
    choices:['q']
};

let goodbye = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '实验已结束。请按“Esc”退出全屏。',
    choices: 'NO_KEYS',//我们想设置到时间直接退出，且按Esc键为针对浏览器的操作，而非该程序的，因此设置为不要被试按键。
    trial_duration:'1500'//持续显示1500毫秒后，自动结束，且此处为整个程序的结尾。
};



//创建学习阶段与再认阶段
//创建注视点屏、学习阶段和再认阶段刺激屏、空屏并组合。
let study_timeline = {//创建一个学习阶段每一个trial的时间线，该时间线由“注视屏→刺激屏→空屏”组成。
  timeline:[//设置时间线，其中其实只有“注视屏→刺激屏”，空屏用post_trial_gap实现。
    {
      type: jsPsychHtmlKeyboardResponse,//注视点使用的插件类型
      stimulus:'<p class="stim">+</p>',//注视点需要呈现在屏幕正中央，因此这里将注视点包裹在p标签中，并设定class值，后面可以在css文件中统一用弹性布局。
      trial_duration:'500',//持续时间500毫秒。
      choices:'NO_KEYS'//无需被试按键，到时间自动消失。
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:function(){
        let html = 
        `<p class="stim">${jsPsych.timelineVariable('word1')}</p>`;//每一个trial当中的刺激屏中的刺激词都不一样，从word1这个list中抽取。
        return html
      },
      choices: ['f', 'j'],//仅运行被试按键f或j。
      prompt:'该词是否能够描述你自己？<br>是按“F”，否按“J”'//出现在刺激词下方的提示词，提醒被试需要做什么任务，怎样按键；br标签换行。
    }
  ],
  timeline_variables: [//创建学习阶段刺激词的list
    {word1:'刺激词1'},//如果有更多的刺激，按格式添加即可，最后一个刺激词在括号后不要有逗号。
    {word1:'刺激词2'},
    {word1:'刺激词3'}
  ],
  randomize_order: true,//设置刺激词呈现的顺序为随机。
  trial_duration:'2000',//被试不按键时，最多呈现2000毫秒就消失进入到下一个trial。
  post_trial_gap: 1000//给每个“注视屏→刺激屏”后添加一个1000毫秒的空屏。
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



//最后，把需要运行的试次添加到数组中并传给.run()，该数组叫时间线
//时间线的方法在许多教程中为先创建一个timeline再push每一个页面进去；
//这里为了使代码清晰易懂，将同类型的页面编写在一起，最后再按顺序传给.run()，则为一个数组，需要用方括号包裹起来。
jsPsych.run([questionnaire1, questionnaire2, intro1, study_timeline, intro2, recog_timeline, goodbye]); 
