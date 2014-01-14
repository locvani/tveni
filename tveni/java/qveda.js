document.write('<hr align="center" width="70%" id="gr">');
document.write('<div align="center" class="gry">&copy;  2004-2014 <a href="http://tveni.ge/" target="_blank">tveni.ge</a><br />ინტერნეტ ვერსია პლანშეტისთვის <a href="http://t.tveni.ge/" target="_blank">t.tveni.ge</a></div>');
document.write('<hr id="gr" width="45%"><hr id="gr" width="55%">');
document.write('<div align=\"center\">');
document.write('<a href=\"http://betaneli.ge/\" target=\"_blank\"><img src=\"images/betaneli.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"ხატები\" /></a> ');
document.write('<a href=\"http://sivrce.com/\" target=\"_blank\"><img src=\"images/sivrce.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"საიტების დამზადება\" /></a> ');
document.write('<a href=\"http://shop.betaneli.ge/\" target=\"_blank\"><img src=\"images/shop.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"მინანქარი, ხატები, სამკაულები\" /></a> ');
document.write('<a href=\"http://baraqa.com/\" target=\"_blank\"><img src=\"images/baraqa.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"უფასო განცხადებები\" /></a> ');
////
document.write('<a href=\"http://vid.tveni.ge/\" target=\"_blank\"><img src=\"images/vid.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"vid.tveni.ge\" /></a> ');
document.write('<a href=\"http://bina.sivrce.com/\" target=\"_blank\"><img src=\"images/bina.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"bina.sivrce.com\" /></a> ');
document.write('<a href=\"http://jewellery.sivrce.com/\" target=\"_blank\"><img src=\"images/jewellery.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"jewellery.sivrce.com\" /></a> ');
document.write('<a href=\"http://house.betaneli.ge\" target=\"_blank\"><img src=\"images/house.gif\" width=\"88\" height=\"31\" border=\"0\" alt=\"house.betaneli.ge\" /></a>');
// and chemi
document.write('<br /><br /><div align=\"center\"><a href=\"http://geobighost.com/?aid=MTkyMzI2MjIyMzI3MjU=\" target=\"_blank\">ულიმიტო ჰოსტინგი</a></div>');
document.write('</div><hr id="gr" width="35%"><hr id="gr" width="25%"><br /><br />');
document.write('<div id=\"bottom\"></div>');

document.write('</td><td style=\"background: url(images/etrati_f.gif);\" width=\"33\">&nbsp;</td></tr>');
document.write('<tr><td><img src=\"images/etrati_g.gif\" width=\"33\" height=\"35\"></td>');
document.write('<td style=\"background: url(images/etrati_h.jpg) repeat-x;\"></td>');
document.write('<td><img src=\"images/etrati_i.gif\" width=\"33\" height=\"35\"></td></tr></table>');

//////////////////
$(function() {
                $(window).scroll(function(){
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0)
						$('#nav').stop().animate({'opacity':'0.2'},400);
					else	
						$('#nav').stop().animate({'opacity':'1'},400);
				});
				
				$('#nav').hover(
					function (e) {
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							$('#nav').stop().animate({'opacity':'1'},400);
						}
					},
					function (e) {
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							$('#nav').stop().animate({'opacity':'0.2'},400);
						}
					}
				);
            });
/////////////////////