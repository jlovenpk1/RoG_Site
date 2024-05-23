(function () {
    var onChange;
    var calculate;
    var onChangeCount;
    var getCountResourceForOne;
    var aurichalcumDustCountDefault;
    var copperDustCountDefault;
    var dwarrhiniteDustCountDefault;
    var goldenDustCountDefault;
    var ironDustCountDefault;
    var panchromiumDustCountDefault;
    var silverDustCountDefault;
    var tantalumDustCountDefault;
    var titaniumDustCountDefault;
    var vanadiumDustCountDefault;
    var setDefaultCountAndActivateDust;
    var fillParametersCountAndPrice;
    var resourceCollection;
    var priceCollection;
    var activate;
    var deactivate;
    var init = function () {
        activate = false;
        deactivate = true;
        getCountResourceForOne();
        onChange(`LythonIngot`);
        return {
            OnChange: onChange,
            Calculate: calculate,
            OnChangeCount: onChangeCount
        }
    }
    onChange = function (action) {
        document.getElementById(`totalPrice`).innerHTML = `Total price: `;
        document.getElementById(`countIngot`).value = 1;
        var selectableItems = document.getElementsByClassName(`itemMenu`);
        Array.from(selectableItems).forEach((item) => { item.style = "background-color: 0;" });
        fillParametersCountAndPrice();
        switch (action) {
            case `LythonIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.LythonIngotSelect.style = "background-color: aqua;";
                break;
            case `ElinviteIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.ElinviteIngotSelect.style = "background-color: aqua;";
                break;
            case `DoreniteIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.DoreniteIngotSelect.style = "background-color: aqua;";
                break;
            case `SideriteIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.SideriteIngotSelect.style = "background-color: aqua;";
                break;
            case `HeavenSteelIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.HeavenSteelIngotSelect.style = "background-color: aqua;";
                break;
            case `LunarDwarrhiniteIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.LunarDwarrhiniteIngotSelect.style = "background-color: aqua;";
                break;
            case `WolfCopperIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.WolfCopperIngotSelect.style = "background-color: aqua;";
                break;
            case `BurgundIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.BurgundIngotSelect.style = "background-color: aqua;";
                break;
            case `FlameSteelIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.FlameSteelIngotSelect.style = "background-color: aqua;";
                break;
            case `NytinoleIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.NytinoleIngotSelect.style = "background-color: aqua;";
                break;
            case `AtlantisiteIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.AtlantisiteIngotSelect.style = "background-color: aqua;";
                break;
            case `BlueGoldIngot`:
                setDefaultCountAndActivateDust(action);
                selectableItems.BlueGoldIngotSelect.style = "background-color: aqua;";
                break;
        }
        getCountResourceForOne();
    }
    calculate = function () {
        //resource
        var r1Count = resourceCollection.aurichalcumDustCount.value;
        var r2Count = resourceCollection.copperDustCount.value;
        var r3Count = resourceCollection.dwarrhiniteDustCount.value;
        var r4Count = resourceCollection.goldenDustCount.value;
        var r5Count = resourceCollection.ironDustCount.value;
        var r6Count = resourceCollection.panchromiumDustCount.value;
        var r7Count = resourceCollection.silverDustCount.value;
        var r8Count = resourceCollection.tantalumDustCount.value;
        var r9Count = resourceCollection.titaniumDustCount.value;
        var r10Count = resourceCollection.vanadiumDustCount.value;
        //price
        var r1Price = priceCollection.aurichalcumDustPrice.value;
        var r2Price = priceCollection.copperDustPrice.value;
        var r3Price = priceCollection.dwarrhiniteDustPrice.value;
        var r4Price = priceCollection.goldenDustPrice.value;
        var r5Price = priceCollection.ironDustPrice.value;
        var r6Price = priceCollection.panchromiumDustPrice.value;
        var r7Price = priceCollection.silverDustPrice.value;
        var r8Price = priceCollection.tantalumDustPrice.value;
        var r9Price = priceCollection.titaniumDustPrice.value;
        var r10Price = priceCollection.vanadiumDustPrice.value;
        var totalPrice = (r1Count * r1Price) +
            (r2Count * r2Price) +
            (r3Count * r3Price) +
            (r4Count * r4Price) +
            (r5Count * r5Price) +
            (r6Count * r6Price) +
            (r7Count * r7Price) +
            (r8Count * r8Price) +
            (r9Count * r9Price) +
            (r10Count * r10Price);
        document.getElementById(`totalPrice`).innerHTML = `Total price: ` + totalPrice;
    }
    onChangeCount = function () {
        var countIngot = document.getElementById(`countIngot`).value;
        document.getElementById(`aurichalcumDustCount`).value = aurichalcumDustCountDefault * countIngot;
        document.getElementById(`copperDustCount`).value = copperDustCountDefault * countIngot;
        document.getElementById(`dwarrhiniteDustCount`).value = dwarrhiniteDustCountDefault * countIngot;
        document.getElementById(`goldenDustCount`).value = goldenDustCountDefault * countIngot;
        document.getElementById(`ironDustCount`).value = ironDustCountDefault * countIngot;
        document.getElementById(`panchromiumDustCount`).value = panchromiumDustCountDefault * countIngot;
        document.getElementById(`silverDustCount`).value = silverDustCountDefault * countIngot;
        document.getElementById(`tantalumDustCount`).value = tantalumDustCountDefault * countIngot;
        document.getElementById(`titaniumDustCount`).value = titaniumDustCountDefault * countIngot;
        document.getElementById(`vanadiumDustCount`).value = vanadiumDustCountDefault * countIngot;
    }
    getCountResourceForOne = function() {
        aurichalcumDustCountDefault = document.getElementById(`aurichalcumDustCount`).value;
        copperDustCountDefault = document.getElementById(`copperDustCount`).value;
        dwarrhiniteDustCountDefault = document.getElementById(`dwarrhiniteDustCount`).value;
        goldenDustCountDefault = document.getElementById(`goldenDustCount`).value;
        ironDustCountDefault = document.getElementById(`ironDustCount`).value;
        panchromiumDustCountDefault = document.getElementById(`panchromiumDustCount`).value;
        silverDustCountDefault = document.getElementById(`silverDustCount`).value;
        tantalumDustCountDefault = document.getElementById(`tantalumDustCount`).value;
        titaniumDustCountDefault = document.getElementById(`titaniumDustCount`).value;
        vanadiumDustCountDefault = document.getElementById(`vanadiumDustCount`).value;
    }
    setDefaultCountAndActivateDust = function(action) {
        switch (action) {
            case `LythonIngot`: 
                //resource
                resourceCollection.ironDustCount.value = 60;
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 10;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 10;

                //price
                priceCollection.ironDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;

                break;
            case `ElinviteIngot`:
                //resource
                resourceCollection.copperDustCount.value = 50;
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 20;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 10;

                //price
                priceCollection.copperDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;

                break;
            case `DoreniteIngot`:
                //resource
                resourceCollection.dwarrhiniteDustCount.value = 40;
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 20;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 10;
                //price
                priceCollection.dwarrhiniteDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;

                break;
            case `SideriteIngot`:
                //resource
                resourceCollection.ironDustCount.value = 30;
                resourceCollection.vanadiumDustCount.value = 20;
                resourceCollection.aurichalcumDustCount.value = 20;
                resourceCollection.silverDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 10;

                //price
                priceCollection.ironDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;


                break;
            case `HeavenSteelIngot`:
                //resource
                resourceCollection.dwarrhiniteDustCount.value = 30;
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 10;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 20;
                resourceCollection.tantalumDustCount.value = 20;

                //price
                priceCollection.dwarrhiniteDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;

                break;
            case `LunarDwarrhiniteIngot`:
                //resource
                resourceCollection.dwarrhiniteDustCount.value = 30;
                resourceCollection.vanadiumDustCount.value = 20;
                resourceCollection.aurichalcumDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 10;
                resourceCollection.goldenDustCount.value = 20;
                //price
                priceCollection.dwarrhiniteDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `WolfCopperIngot`:
                //resource
                resourceCollection.copperDustCount.value = 30;
                resourceCollection.titaniumDustCount.value = 10;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 20;
                resourceCollection.panchromiumDustCount.value = 10;
                resourceCollection.wolframDustCount.value = 10;
                resourceCollection.tantalumDustCount.value = 10;
                resourceCollection.goldenDustCount.value = 10;

                //price
                priceCollection.copperDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `BurgundIngot`:
                //resource
                resourceCollection.copperDustCount.value = 20;
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 10;
                resourceCollection.silverDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 10;
                resourceCollection.tantalumDustCount.value = 10;
                resourceCollection.goldenDustCount.value = 10;

                //price
                priceCollection.copperDustPrice.disabled = activate;
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `FlameSteelIngot`:
                //resource
                resourceCollection.ironDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 20;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 10;
                resourceCollection.wolframDustCount.value = 20;
                resourceCollection.tantalumDustCount.value = 20;
                resourceCollection.goldenDustCount.value = 10;

                //price
                priceCollection.ironDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `NytinoleIngot`:
                //resource
                resourceCollection.copperDustCount.value = 10;
                resourceCollection.titaniumDustCount.value = 10;
                resourceCollection.aurichalcumDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 30;
                resourceCollection.goldenDustCount.value = 20;

                //price
                priceCollection.copperDustPrice.disabled = activate;
                priceCollection.titaniumDustPrice.disabled = activate;
                priceCollection.aurichalcumDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `AtlantisiteIngot`:
                //resource
                resourceCollection.dwarrhiniteDustCount.value = 10;
                resourceCollection.silverDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 20;
                resourceCollection.tantalumDustCount.value = 20;
                resourceCollection.goldenDustCount.value = 20;

                //price
                priceCollection.dwarrhiniteDustPrice.disabled = activate;
                priceCollection.silverDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
            case `BlueGoldIngot`:
                //resource
                resourceCollection.vanadiumDustCount.value = 10;
                resourceCollection.panchromiumDustCount.value = 20;
                resourceCollection.wolframDustCount.value = 10;
                resourceCollection.tantalumDustCount.value = 30;
                resourceCollection.goldenDustCount.value = 30;

                //price
                priceCollection.vanadiumDustPrice.disabled = activate;
                priceCollection.panchromiumDustPrice.disabled = activate;
                priceCollection.wolframDustPrice.disabled = activate;
                priceCollection.tantalumDustPrice.disabled = activate;
                priceCollection.goldenDustPrice.disabled = activate;

                break;
        }
    }
    fillParametersCountAndPrice = function() {
        //resource
        resourceCollection = document.getElementsByClassName(`count`);
        Array.from(resourceCollection).forEach((dust) => { dust.value = 0; });
        //price
        priceCollection = document.getElementsByClassName(`price`);
        Array.from(priceCollection).forEach((price) => { price.value = 0; });
        Array.from(priceCollection).forEach((price) => { price.disabled = deactivate; });
    }
    $.rogdoll.IngotCraft = $.rogdoll.IngotCraft || {};// you can rewrite this @drond
    $.rogdoll.IngotCraft = init(); // you can rewrite this @drond
})();