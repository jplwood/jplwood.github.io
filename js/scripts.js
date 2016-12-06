$(document).ready(function() {

  //function call to set a random quote on homepage
  setRandomQuote();

  $('.navbar-collapse a').click(function (e) {
    $('.navbar-collapse').collapse('toggle');
  });

  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

  if (isMobile) {
    $('.navbar-jbag').addClass('scrolled');
  } else {
    $(window).bind('scroll', function() {
      var distance = 50;
      if ($(window).scrollTop() > distance) {
        $('.navbar-jbag').addClass('scrolled');
      }
      else {
        $('.navbar-jbag').removeClass('scrolled');
      }
    });
  }

  //Increase Quote Opacity on Scroll
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/2;

    $('.quote-block, .glyphicon-chevron-down').css({
        'opacity': ((height - scrollTop) / height)
    });
});

  console.log(window.location.hash);
  if(window.location.hash == "#thanks") {
    $('#thanks').modal('show');
    removeHash();
  }
});

function setRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  var quoteHTML = randomQuote.quote.length > 140 ? "<small>" + randomQuote.quote + "</small>" : randomQuote.quote;
  $('.quote').html(quoteHTML);
  $('.author').html(randomQuote.author);
  if(randomQuote.note==="") {
    $('.note').hide();
  } else {
    $('.note').show();
    $('.note').html(randomQuote.note);
  }
}

function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}



// Data
var quotes = [
  {
    "quote": "Instructions for living a life. Pay attention. Be astonished. Tell about it.",
    "author": "Mary Oliver",
    "note":""
  },
  {
    "quote": "What does a rock know of April?",
    "author": "Rumi",
    "note":""
  },
  {
    "quote": "I loathe, I abhor the sea, & all ships which sail upon it.",
    "author": "Charles Darwin",
    "note": "1836, nearing the end of his voyage"
  },
  {
    "quote": "Progress is the soul of the Universe",
    "author": "Pierre Teilhard de Chardin",
    "note": ""
  },
  {
    "quote": "What shall I learn of beans or beans of me?",
    "author": "Henry David Thoreau",
    "note": "when planting a field of beans"
  },
  {
    "quote": "What are these pines & these birds about? What is this pond a-doing? I must know a little more.",
    "author": "Henry David Thoreau",
    "note": "on struggling to finish his Walden manuscript"
  },
  {
    "quote": "A cask of wine works more miracles than a church full of saints.",
    "author": "Italian Proverb",
    "note": ""
  },
  {
    "quote": "I omit the unusual - the hurricanes and earthquakes - and describe the common, this is the true theme of poetry.",
    "author": "Henry David Thoreau",
    "note": ""
  },
  {
    "quote": "How glorius these sunbeams are! They seem to call Earth to the Heavens!",
    "author": "Alexander von Humbolt",
    "note": "1859, on the day of his death"
  },
  {
    "quote": "When we try to pick anything out by itself, we find it hitched to everything else in the universe.",
    "author": " John Muir",
    "note": "My First Summer in the Sierra"
  },
  {
    "quote": "...no doubt these trees would make good lumber after passing through a sawmill, as George Washington after passing through the hands of a French cook would have made good food.",
    "author": "John Muir",
    "note": "upon seeing Sequoias felled for timber"
  },
  {
    "quote": "I only went out for a walk, and finally concluded to stay out til sundown, for going out, I found, was really going in.",
    "author": "John Muir",
    "note": ""
  },
  {
    "quote": "There is in fact no distinction between the fate of the land and the fate of the people. When one is abused the other suffers.",
    "author": "Wendell Berry",
    "note": ""
  },
  {
    "quote": "I have no plan, system or trick... I mean simply to go on hammering & thumping as best I can.",
    "author": "John Muir",
    "note": "on his desire to keep nature pristine"
  },
  {
    "quote": "Anyone who takes himself too seriously always runs the risk of looking ridiculous; anyone who can consistently laugh at himself does not.",
    "author": "Vaclav Havel",
    "note": ""
  },
  {
    "quote": "Rivers know this: There is no hurry. We shall get there someday.",
    "author": "A. A. Milne",
    "note": "author of Winnie-the-Pooh"
  },
  {
    "quote": "The more original a discovery, the more obvious it seems afterwards.",
    "author": "Arthur Koestler",
    "note": "novelist"
  },
  {
    "quote": "It is not enough to be busy. So are the ants. The question is, what are we busy about.",
    "author": "Henry David Thoreau",
    "note": ""
  },
  {
    "quote": "What an elder sees sitting, the young can't see standing",
    "author": "Gustave Flaubert",
    "note": ""
  },
  {
    "quote": "No one has ever become poor by giving.",
    "author": "Anne Frank",
    "note": ""
  },
  {
    "quote": "Don't be afraid of missing opportunities. Behind every failure is an opportunity somebody wishes they had missed.",
    "author": "Lily Tomlin",
    "note": ""
  },
  {
    "quote": "There are two kinds of writer's block. One is when you freeze because you think you can't do it. The other is when you think it's not worth doing.",
    "author": "Tom Wolfe",
    "note": ""
  },
  {
    "quote": "Advice is judged by results, not by intentions.",
    "author": "Cicero",
    "note": ""
  },
  {
    "quote": "Stories mimic life like certain insects mimic leaves and twigs.",
    "author": "Mary Gaitskill",
    "note": ""
  },
  {
    "quote": "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    "author": "James Baldwin",
    "note": ""
  },
  {
    "quote": "My exit is the result of too many entrées.",
    "author": "Richard Monckton Milnes",
    "note": ""
  },
  {
    "quote": "...we [humans] frequently mistake comfort for well-being.",
    "author": "Daniel Lieberman",
    "note": ""
  },
  {
    "quote": "...your body is not the best of all possible bodies. But it is the only one you'll ever have, and it's worith enjoying, nurturing, and protecting.",
    "author": "Daniel Lieberman",
    "note": ""
  },
  {
    "quote": "Doing something joyfully doesn't make it any easier, it only makes it better - and it also makes it communal - that we're all doing it together. When you work in fear, or if you work in distress, you often feel alone.",
    "author": "Stephen Colbert",
    "note": ""
  },
  {
    "quote": "Everything that is interesting is 90% boring.",
    "author": "Elizabeth Gilbert",
    "note": "quoted from <a href='http://www.onbeing.org/program/elizabeth-gilbert-choosing-curiosity-over-fear/8786'>On Being</a>"
  },
  {
    "quote": "A true vocation always metamorphosizes both ambition and failure into compassion and understanding for others",
    "author": "David Whyte",
    "note": ""
  },
  {
    "quote": "Good developers know how things work. Great developers know why things work.",
    "author": "adage",
    "note": ""
  },
  {
    "quote": "We're programmers. Programmers are, in their hearts, architects, and the first thing they want to do when they get to a site is to bulldoze the place flat and build something grand. We're not excited by incremental renovation: tinkering, improving, planting flower beds.",
    "author": "Joel Spolsky",
    "note": "<a href='http://www.joelonsoftware.com/articles/fog0000000069.html'>Things You Should Never Do, Part I</a>"
  },
];

/*

For extra quotes

{
  "quote": "",
  "author": "",
  "note": ""
},
*/
