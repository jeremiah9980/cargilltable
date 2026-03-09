
function loadExampleData(){
const data={chatgpt:7,grok:6,gemini:8}
const ctx=document.getElementById('aiChart').getContext('2d')
new Chart(ctx,{type:'bar',data:{labels:['ChatGPT','Grok','Gemini'],
datasets:[{label:'Family Table Alignment Score',
data:[data.chatgpt,data.grok,data.gemini],
backgroundColor:['#4ade80','#60a5fa','#fbbf24']}]} })
}

function loadTimeline(){
const timeline=[
{date:"2025-06-01",event:"Schedule conflict"},
{date:"2025-07-02",event:"Communication escalation"},
{date:"2025-07-05",event:"Pickup clarification"}
]
const table=document.getElementById("timeline")
timeline.forEach(t=>{
let row=table.insertRow()
row.insertCell(0).innerText=t.date
row.insertCell(1).innerText=t.event
})
}

function exportReport(){
const report={date:new Date(),summary:"Exported communication analysis report"}
const blob=new Blob([JSON.stringify(report,null,2)],{type:"application/json"})
const a=document.createElement("a")
a.href=URL.createObjectURL(blob)
a.download="analysis_report.json"
a.click()
}

function handleUpload(){
const file=document.getElementById("dataset").files[0]
if(!file){alert("Upload dataset first");return}
const reader=new FileReader()
reader.onload=function(e){
document.getElementById("uploadStatus").innerText="Dataset loaded successfully."
}
reader.readAsText(file)
}

window.onload=function(){
loadExampleData()
loadTimeline()
}
