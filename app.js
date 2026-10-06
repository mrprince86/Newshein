const API='/api';const token=localStorage.getItem('ns_token');
function api(path,opt={}){opt.headers={...(opt.headers||{}),'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})};return fetch(API+path,opt).then(async r=>{const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Request failed');return d})}
function requireLogin(){if(!token){location.href='login.html?next='+encodeURIComponent(location.pathname+location.search);return false}return true}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function money(x){return '₹'+Number(x).toFixed(2)}
async function header(){const el=document.querySelector('#userbar');if(!el)return; if(!token){el.innerHTML='<a href="login.html">Login</a><a class="btn pink" href="register.html">Register</a>';return}try{const m=await api('/me');el.innerHTML=`<span>${esc(m.email)} · ${money(m.wallet)}</span><a href="account.html">Account</a><button class="btn light" onclick="localStorage.removeItem('ns_token');location.href='index.html'">Logout</button>`}catch{localStorage.removeItem('ns_token');location.reload()}}
function addToCart(id){if(!requireLogin())return;api('/cart',{method:'POST',body:JSON.stringify({productId:id,qty:1})}).then(()=>{alert('Added to cart');}).catch(e=>alert(e.message))}
