// Akker Portfolio — shared interactivity (demo only, no backend)

function initTabs(root){
  const bar = root.querySelector('.tabbar');
  if(!bar) return;
  bar.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', () => {
      bar.querySelector('button.active').classList.remove('active');
      btn.classList.add('active');
      root.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      root.querySelector('#' + btn.dataset.tab).classList.add('active');
    });
  });
}

function initRangeToggle(toggleEl, chart, ranges){
  toggleEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', () => {
      toggleEl.querySelector('.active').classList.remove('active');
      btn.classList.add('active');
      const r = ranges[btn.dataset.range];
      chart.data.labels = r.labels;
      chart.data.datasets.forEach((ds,i)=>{ ds.data = r.data[i] !== undefined ? r.data[i] : r.data; });
      chart.update();
    });
  });
}

function initTiles(){
  document.querySelectorAll('.tile').forEach(tile=>{
    tile.addEventListener('click', () => {
      const name = tile.querySelector('h3').textContent;
      alert('Request started: ' + name + '\n\n(Demo only — this would create a tracked request for your advisor.)');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabs]').forEach(initTabs);
  initTiles();
});
