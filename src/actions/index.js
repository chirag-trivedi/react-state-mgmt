export function foodItems() {
    console.log('action method called');
    return {
        type: 'FOOD_ITEMS',
        payload:
            [
                { //application data to be displayed in response to the action
                    id: 1,
                    name: 'Donuts',
                    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F1002%2F94%2Fpng-transparent-googlehttps://www.google.com/url?sa=i&url=http%3A%2F%2Fflyshionista.com%2F2017%2F08%2F22%2Fgoogle-donut-pop-ups-present-the-newest-voice-activated-google-home-mini-speakers%2F&psig=AOvVaw1aDUC930nmuQ5WiMOVuG7b&ust=1628810608138000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCa_u-OqvICFQAAAAAdAAAAABAD-play-google-account-app-store-donuts.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-mllnf&tbnid=JU2vJ-GxrlvEgM&vet=12ahUKEwik7_O-jqryAhUPb60KHaFVBkwQMygAegUIARCsAQ..i&docid=3V1RpGNGQ1St6M&w=920&h=920&itg=1&q=google%20donut%20image%20app&ved=2ahUKEwik7_O-jqryAhUPb60KHaFVBkwQMygAegUIARCsAQ'
                },
                {
                    id: 2,
                    name: 'Ice-cream',
                    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fube-ice-cream-recipe-4843600&psig=AOvVaw1PQa0j_ouYrC4EPTin70HX&ust=1628810625504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjLlemOqvICFQAAAAAdAAAAABADhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fc_limit%2Ch_1200%2Cq_75%2Cw_1200%2Fv1%2Fclients%2Fcolumbus%2Ftemp_26b9751e-8b31-42d0-84b9-0892252ac52c.jpg&imgrefurl=https%3A%2F%2Fwww.experiencecolumbus.com%2Fblog%2Fpost%2Fwhere-to-find-the-best-scoops-of-ice-cream-in-columbus%2F&tbnid=jPMCY9Go9ZSrrM&vet=12ahUKEwiT5pfHjqryAhUe-KwKHdITD2QQMygAegUIARDnAQ..i&docid=uEt0ZXKBV23owM&w=1199&h=1200&q=ice%20cream&ved=2ahUKEwiT5pfHjqryAhUe-KwKHdITD2QQMygAegUIARDnAQ'
                },
                {
                    id: 3,
                    name: 'Chocolates',
                    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChocolate&psig=AOvVaw3VVig8VoFPIE6FInlQJTx-&ust=1628810650446000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICAj9WOqvICFQAAAAAdAAAAABAPhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F70%2FChocolate_%2528blue_background%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChocolate&tbnid=WKMN0Ca31welwM&vet=12ahUKEwjRkIrTjqryAhVM_qwKHdRBABkQMygAegUIARD1Ag..i&docid=aGyyPral9hib7M&w=1000&h=900&q=chocolate&ved=2ahUKEwjRkIrTjqryAhVM_qwKHdRBABkQMygAegUIARD1Ag'
                },
            ]
    }
}