let pronoun = ['the','our','my'];
let adj = ['great', 'big','magic' ];
let noun = ['jogger','racoon','rabbit'];
let domain = ['.com', '.es', '.net'];

const domainGenerator = () => {
    
    for(let i=0; i<pronoun.length; i++){
        for(let k=0; k<adj.length; k++){
            for(let j=0; j<noun.length; j++){
                for(let m=0; m<domain.length; m++){
                    //let text = `${pronoun[i]}${adj[k]}${noun[j]}${domain[m]}`
                    console.log(`${pronoun[i]}${adj[k]}${noun[j]}${domain[m]}`);
                }
            }
        }
    }
}
domainGenerator();
    /*
    i=0 k=0 j=0 m=0
    i=0 k=0 j=0 m=1
    i=0 k=0 j=0 m=2
    i=0 k=0 j=1 m=0
    i=0 k=0 j=1 m=1
    i=0 k=0 j=1 m=2
    ...
*/