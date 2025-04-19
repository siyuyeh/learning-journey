
const tasks = [
  { icon: '🧮', label: '數學任務', content: '用骰子加總10' },
  { icon: '📖', label: '語文任務', content: '圖卡拼注音「ㄅㄆㄇ」' },
  { icon: '🧱', label: '創作任務', content: '畫一個戰鬥陀螺' },
  { icon: '🎨', label: '自主任務', content: '拼圖10分鐘' },
  { icon: '🧹', label: '生活任務', content: '折今天穿的衣服' }
];

const root = document.getElementById('root');
root.innerHTML = `<h1>🎓 呈呈學習之旅</h1><h2>📅 今日任務</h2>`;

tasks.forEach((task, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<div style="font-size: 1.2rem">${task.icon} ${task.label}</div><div style="font-size: 0.9rem; margin-top: 0.3rem">${task.content}</div>`;
  card.onclick = () => {
    card.classList.toggle('completed');
    if (document.querySelectorAll('.card.completed').length === tasks.length) {
      if (!document.getElementById('done')) {
        const done = document.createElement('div');
        done.id = 'done';
        done.style = 'margin-top: 2rem; font-weight: bold; color: #db2777; font-size: 1.1rem;';
        done.textContent = '太棒了！呈呈今天完成所有任務啦！✨';
        root.appendChild(done);
      }
    }
  };
  root.appendChild(card);
});
