export function extractTime(dateString){
    const date=new Date(dateString)
    const timeString=date.toLocaleTimeString('en-US',{
        hour:'2-digit',
        minute:'2-digit',
        hour12:true,
    })
    return timeString
}

