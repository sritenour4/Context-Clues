window.addEventListener('DOMContentLoaded', function () {

    var friendArray = ['Blake', 'Emily', 'Mike', 'Jemma', 'Kelley'];

    var locationArray = ['laundry room', 'kitchen', 'bedroom', 'guest bedroom', 'family room', 'master closet', 'guest bathroom',
        'master bathroom', 'basement', 'attic'];

    var weaponArray = ['Hand Grenade', 'Lightsaber', 'Infinity Guantlet', 'Katana', 'Crossbow', 'Whip', 'Sword', 'Torpedo', 'Laser Cat', 'Lucille',
        'Revolver', 'Curse', 'Silly Putty', 'Spear', 'Missile', 'Water Balloon', 'Excalibur', 'Brass Knuckles', 'Hammer', 'Poison Dart'];


    for (var i = 1; i <= 100; i++) {
        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(`Accusation ${i}`);
        h3.appendChild(h3Text)
        document.body.appendChild(h3);
        h3.addEventListener('click', accusationAlert(i));

    }

    function accusationAlert(i) {
        var friend = friendArray[i % 5];
        var location = locationArray[i % 10];
        var weapon = weaponArray[i % 20];

        return function () {
            alert(`Accusation ${i}: I accuse ${friend}, with the ${weapon} in the ${location}!`);
        };
    };

});






