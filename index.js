// Code your solutions in this file

function writeCards(names, event)
{
    const thankMess = [];

    for(let i = 0; i < names.length; i++)
    {
        thankMess[i]= `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return thankMess;
}

function countDown(num)
{
    while(num >= 0)
    {
        console.log(num);
        num--;
    }
}
