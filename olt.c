#include <stdio.h>
int main()
{
    register int i;
    scanf("%d",&i);
    for(i=0;i<5;)
    printf("%d",++i);
    
    return 0;
}