
//Switch planType

function check() {
  var checkBox = document.querySelector('input[type="checkbox"]');
  var month = document.getElementsByClassName("monthP");
  var annual = document.getElementsByClassName("annualP");
 
  checkBox.addEventListener("change", function()
  {
    for (var i = 0; i < month.length && annual.length; i++) {
        if (checkBox.checked)
        {
            month[i].style.display = "flex";
            annual[i].style.display = "none";
        } 
        else 
        {
            month[i].style.display = "none";
            annual[i].style.display = "flex";
        }
}
});
}
check()                              

//Switch Active Cards

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
console.log(card3);
console.log(card1);
const cardSelected = document.querySelector('[class="Card active"]');
console.log(cardSelected);



window.onload = () => {
  const cardview = document.querySelector('[class="Card active"]');
  const cards = cardview.querySelectorAll('[class="Card"]');
  
  for(let i = 0; i < cards.length; i++) 
  {
    cards[i].onclick = () => 
    {
      alert("click");
    }
  }
}




/*
function switch ()
{
    document.addEventListener('click', function onClick ()
    {

        this.ELEMENT_NODE.add('active');
        this.firstElementChild.classList.add('active');
        this.lastElementChild.classList.add('active');
        console.log("hello");
    }
};

*/

/*
const data = document.getElementsByClassName("active");
console.log(data);
*/

/*
document.addEventListener('click', function onClick () 
{
    for (var i = 0; i < card3.childNodes[i]; i++) 
    {
        if (card3 !='class active')
        {
        card3.childNodes[i].classList.add('active');
        card2.classList.remove('active');
        console.log("hello");
        }
        card3.classList.add('active');
        card2.classList.remove('active');
    }
});
*/


/*
document.addEventListener('click', function onClick () {
    
        card3.classList.add('active');
        for (var i = 0; i < card3.childNodes[0]; i++) {
        card3.childNodes[0].classList.add('active');
        card2.classList.remove('active');
        console.log("hello");
});
*/


/*
function activeCard()
{
    const card2 = document.querySelector('[class="Card active"]');

    for (let i=0; i<4;i++)
    {
        if (card[i]!=card2)
        {
            document.getElementById("card[i]").classList.contains('active');
            console.log('awax')
        }
        else
        {
            document.getElementById("card[i]").className += "active";
            console.log('hello')

        }
    };

}

console.log(activeCard)

*/

/*
document.addEventListener('click', (e)=>
{
    document.getElementById("card3").children.className="active";
    card2.classList.replace('card active', 'card')
    console.log('awax')
});
*/
/*
document.addEventListener('DOMContentLoaded', function () {
  var actived = document.querySelector('[class="Card active"]');
});
*/
/*
document.addEventListener('click',  (e)=>
{
    for(let i=0; i<document.getElementById("card[i]").childNodes.length; i++)
    {
        document.getElementById("card3").childNodes[i].className="active";
    }
    card2.classList.replace('card active', 'card')
    console.log('awax')
});
*/



/*
    document.querySelector('[class="Card active"]')

        if (card2)
        {
            console.log('ceb');
        }
         else
         {


         }
        });

*/

/*
function actived(card)
{
    this.card[i] = card1 || card2 || card3;


}
*/


/*

function Selected()
{
    if (cardSelected.active)
    {
        console.log('hello');
    }
    else
    {
        console.log('awax');
    }

};

console.log(Selected);
*/


/*
btn.addEventListener('click', function onClick(event) {
  const box = document.getElementById('box');

  box.style.backgroundColor = 'coral';
*/


/*
function planChoice()
{
    document.getElementById("card[i]").onclick = function()
        {
            for (var i = 0; i < card.length; i++)
            {
                if (card.Selected)
                {
                console.log('hello')
                }
                else
                {
                console.log('awax')
                }
            }
        };
};

console.log(planChoice);
*/


//var activeCard = document.getElementsByClassName('active');
//console.log(activeCard);
//var inactivePlan = activeCard.classeName="";
//var activePlan = 
//var Plan = document.querySelectorAll('.active').classList.remove();


/*
function select() {
    var cardSelected = getElementById('card[i]');
    activeCard.addEventListener(click, function()
    {
        for (var i=0; i< cardSelected.id; i++)
        
        {
            if(cardSelected.selected)
            {
            //kke chose
            }
            else{
            //kkchose
            }
        };
    });
}
*/

//console.log(select);

//function planChoice(){}




/*
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this

      console.log('Checked');
    } else {
      // do that
      console.log('Not checked');
    }
  });
});*/