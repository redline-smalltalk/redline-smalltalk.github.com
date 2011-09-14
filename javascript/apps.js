//
// Pre-load rollover images
//

images_to_preload = [
  'download-hover.png','documents-hover.png',
	'docs-faq-hover.png','docs-thanks-hover.png','docs-icon-hover.png',
	'download-icon-hover.png','discussion-hover.png','news-hover.png',
	'twitter-hover.png','email-hover.png','community-hover.png','twitter-hover.png'
];

for (var i = 0; i < images_to_preload.length; i++) {
  (new Image()).src = 'img/' + images_to_preload[i];
}