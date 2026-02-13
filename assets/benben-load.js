import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://yqpuktkuxoxyysqdkuzj.supabase.co', 'sb_publishable_AlrnN7ZmmrkEKdefm8bzOw_yn-qGd4D')
const list = ducument.getElementById('benben-list')
var p=0;
async function load(){
    const { data, error } = await supabase
        .from('benben')
        .select('*')
        .order('created_at', { ascending: false })
        .range(p, p+9);
    for(var i=0;i<data.length;i++){
        const el = document.createElement('div');
        el.className = 'benben';
        const up = document.createElement('div');
        up.className = 'benben-up';
        const uid = document.createElement('span');
        uid.className = 'benben-uid';
        uid.textContent = String(benben[i].lg_id);
        up.appendChild(uid);
        const tm = document.createElement('span');
        tm.className = 'benben-time';
        new Date(data[i].created_at).toLocaleString();
        up.appendChile(tm);
        el.appendChild(up);
        const md = document.createElement('div');
        md.className = 'benben-md';
        md.textContent = benben[i].md;
        el.appendChild(md);
        list.appendChild(el);
    }
}
load();