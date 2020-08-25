const FABRICS = [
    {
        name: 'Беларуськалий',
        coords: [52.782087, 27.540218],
        desc: 'Предприятие, производитель калийных минеральных удобрений, один из крупнейших в мире и второй в СНГ, после «Уралкалия»',
        links: {
            telegram: '@Belkaliy'
        }
    }
];

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [53.882845, 27.727359],
        zoom: 6
    });

    myMap.behaviors.disable('scrollZoom');

    FABRICS.forEach(fabric => {
        let {name, coords, desc, links} = fabric;

        myMap.geoObjects
            .add(
                new ymaps.Placemark(coords, {
                    hintContent: name,
                    balloonContentHeader: name,
                    balloonContentBody: `<div><i>${desc}</i><div>Telegram: ${links.telegram}</div><div/>`
                }, {preset: 'islands#circleIcon', iconColor: '#4dcd70'})
            )
    });
}