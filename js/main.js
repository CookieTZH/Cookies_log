function $(sel){return document.querySelector(sel)}
function formatDate(s){try{return new Date(s).toLocaleDateString()}catch(e){return s}}

async function loadPostsList(){
  const listEl = $('#post-list')
  try{
    const res = await fetch('posts/_posts.json')
    const posts = await res.json()
    if(!posts.length){ listEl.textContent='暂无文章' ; return }
    listEl.innerHTML = ''
    posts.sort((a,b)=> (a.date<b.date?1:-1))
    posts.forEach(p=>{
      const card = document.createElement('div')
      card.className='post-card'
      card.innerHTML = `<a href="post.html?post=${encodeURIComponent(p.file)}"><strong>${p.title}</strong><div class="post-meta">${formatDate(p.date)} · ${p.excerpt||''}</div></a>`
      listEl.appendChild(card)
    })
  }catch(e){listEl.textContent='加载失败'}
}

async function loadPostPage(){
  const params = new URLSearchParams(location.search)
  const file = params.get('post')
  const container = $('#post-content')
  if(!file){ container.textContent='未指定文章'; return }
  try{
    const metaRes = await fetch('/posts/_posts.json')
    const posts = await metaRes.json()
    const meta = posts.find(p=>p.file===file)
    const mdRes = await fetch('/posts/'+file)
    const md = await mdRes.text()
    container.innerHTML = marked.parse(md)
    if(meta && meta.title) document.title = meta.title + ' - 个人站点'
  }catch(e){container.textContent='加载文章失败'}
}

async function loadFilesList(){
  const listEl = document.getElementById('file-list')
  try{
    const res = await fetch('../files/_files.json')
    const files = await res.json()
    if(!files.length){ listEl.textContent='暂无文件' ; return }
    listEl.innerHTML = ''
    files.forEach(f=>{
      const div = document.createElement('div')
      div.className='post-card'
      div.innerHTML = `<a href="${f.path}"><strong>${f.name}</strong><div class="post-meta">${f.desc||''}</div></a>`
      listEl.appendChild(div)
    })
  }catch(e){ if(listEl) listEl.textContent='加载失败' }
}

document.addEventListener('DOMContentLoaded',()=>{
  const yearEls = document.querySelectorAll('#year')
  yearEls.forEach(e=>e.textContent = new Date().getFullYear())
  if(document.getElementById('post-list')) loadPostsList()
  if(document.getElementById('post-content')) loadPostPage()
  if(document.getElementById('file-list')) loadFilesList()
})
