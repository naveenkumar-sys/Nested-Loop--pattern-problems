//box pattern
for(let i=1;i<=5;i++)
{
    let line="";
    for(let j=1;j<=5;j++)
    {
        line+="*";
    }
    console.log(line);
}
//Triangle pattern
for(let i=1;i<=4;i++)
{
  let line="";
  for(let j=4;j>i;j--)
  {
    line+=" ";
  }
  for(let k=1;k<=i;k++)
  {
    line+="* ";
  }
  console.log(line);
}

//right angle triangle

for(let i=1;i<=5;i++)
{
    let line="";
    for(let j=1;j<=i;j++)
    {
        line+="* ";
    }
    console.log(line);
}

//diamond pattern
for(let i=1;i<=5;i++)
{
  let line="";
  for(let j=5;j>i;j--)
  {
    line+=" ";
  }
  for(let k=1;k<=i;k++)
  {
    line+="* ";
  }
  console.log(line);
}
for(let i=4;i>=1;i--)
{
  let line="" ;
  for(let j=4;j>=i;j--)
  {
    line+=" ";
  }
  for(let k=1;k<=i;k++)
  {
    line+="*"+" ";
  }
  console.log(line);
}