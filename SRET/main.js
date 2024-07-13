//初始化jsPsych
let jsPsych = initJsPsych({
    on_finish: function() {
      jsPsych.data.get().localSave('csv','data.csv');
    },
    show_progress_bar: true,
    message_progress_bar: '实验进度：'
  });


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



//最后，把需要运行的试次添加到数组中并传给.run()，该数组叫时间线
jsPsych.run([questionnaire1, questionnaire2, intro1, study_timeline, intro2, recog_timeline, goodbye]);
