$(document).ready(function () {

    $(window).scroll(function (event) {

        var y = $(this).scrollTop();

        if (y >= 500) {
            $('.time1955').addClass('animate');
        }

        if (y >= 800) {
            $('.img1955').addClass('animate');
        }

        if (y >= 800) {
            $('.tekst1955').addClass('animate');
        }

        if (y >= 1100) {
            $('.time195578').addClass('animate');
        }

        if (y >= 1300) {
            $('.img5578').addClass('animate');
        }

        if (y >= 1300) {
            $('.tekst5578').addClass('animate');
        }

        if (y >= 1900) {
            $('.time1978').addClass('animate');
        }

        if (y >= 2000) {
            $('.img1978').addClass('animate');
        }

        if (y >= 2000) {
            $('.tekst1978').addClass('animate');
        }

        if (y >= 3200) {
            $('.diagram').addClass('animate');
        }

        if (y >= 3200) {
            $('.diagramKg').addClass('animate');
        }

        if (y >= 3200) {
            $('.arstall').addClass('animate');
        }

        if (y >= 11100) {
            $('.nasjonSoyler').addClass('animate');
        }

        if (y >= 11100) {
            $('.diagramkg').addClass('animate');
        }

        if (y >= 11100) {
            $('.arstall').addClass('animate');
        }

    });



    $('.rightArrow').click(function () {
        var currentSlide = $('.produktSlide.slide');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(300).removeClass('slide');
        nextSlide.fadeIn(300).addClass('slide');

        if (nextSlide.length == 0) {
            $('.produktSlide').first().fadeIn(300).addClass('slide');
        }

    });

    $('.leftArrow').click(function () {
        var currentSlide = $('.produktSlide.slide');
        var prevSlide = currentSlide.prev();

        currentSlide.fadeOut(300).removeClass('slide');
        prevSlide.fadeIn(300).addClass('slide');

        if (prevSlide.length == 0) {
            $('.produktSlide').last().fadeIn(300).addClass('slide');
        }

    });

    $(".tannhygene").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickTannhygene');
        $('.changeH').text("Tannhelse");
        $('.changeP').html("<p> Tannemalje påvirkes av syre. Syre kan komme fra bakterier i munnen og føre til «hull» eller den kan komme fra syre i mat og drikke. Denne syren kan gi tannerosjon som betyr at emaljen langsomt går i oppløsning. </p> <p> Hyppig inntak av sure matvarer (f. eks. sure godterier, frukt, juice, leskedrikker og brus) kan forårsake tannerosjon. Lettbrus er like sur som vanlig brus. Hard trening uten tilstrekkelig drikke kan føre til munntørrhet. Spytt beskytter mot erosjoner. Mange sportsdrikker inneholder stoffer som kan gi erosjoner ved hyppige inntak. </p>");
    });

    $(".hjerte").on("click", function () {
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickHjerte');
        $('.changeH').html("<h3>Hjerte og </h3> <h3> karsykdommer</h3>");
        $('.changeP').html('<p> <span class="spanred"> 20 000 </span>  legges inn med hjerteinfarkt og hjerneslag hvert år.<p> <p> <strong> Hva er hjerte- og karsykdommer?  </strong> </p> <p>Hjerte- og karsykdommer betegnes sykdommene i pulsårene (arteriene) i hjertet og resten av kroppen . Sykdommene er hovedsakelig forårsaket av åreforkalkning. Avhengig av hvor i kroppen åreforkalkningen er mest utbredt, kan den gi forskjellige symptomer. De vanligste symptomer oppstår i hjertet, hjernen og bena.</p> <p> <strong> Risikofaktorer </strong> <br> Diabetes og overvekt <br> Høyt inntak av sukkerholdig drikke <br> Lavt inntak av frukt og grønnsaker <br> Fysisk inaktivitet </p>');
    });

    $(".overvekt").on("click", function () {
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickOvervekt');
        $('.changeH').text("Overvekt");
        $('.changeP').html('<p> <span class="spanred"> 28% </span> av den norske befolkningen er idag overvektige. <strong> <p> Hva er overvekt? </strong Generelt kan man si at det er å ha for mye fett på kroppen i forhold til høyden og i forhold til det som er ønskelig. </p> <p> Overvekt er forbundet med økt risiko for hjerte- og karsykdommer og for utvikling av diabetes (type 2-diabetes). Det er spesielt økt midjemål, livvidde, som synes å disponere for diabetes.</p>');
    });

    $(".diabetes").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickDiabetes');
        $('.changeH').html("<h3>Diabetes </h3> <h3> type II </h3>");
        $('.changeP').html('<p> <span class="spanred"> 4,30% </span> (218 340) av den norske befolkningen har diagnosen.<p> <p> <strong> Hva er diabetes type 2? </strong> </p> <p> Kroppen har nedsatt insulinproduksjon, og insulinet som produserer virker for dårlig. </p> <p> <strong> Risikofaktorer </strong> <br> Genetikk <br> Overvekt og fedme Kosthold <br> Manglende fysisk aktivitet </p>');
    });

    $(".fettblod").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickFettblod');
        $('.changeH').text("Fett i blodet");
        $('.changeP').html("<p>Høyt fett- og kolesterolinnhold i blodet (hyperlipidemi og hyperkolesterolemi) er ikke en sykdom i seg selv, men en tilstand som gir økt risiko for å utvikle åreforkalkning. Forhøyet fett og kolesterol skyldes ofte fet kost, men noen har en medfødt tendens til forhøyet fett i blodet. </p>");
    });

    $(".insulin").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickFettlever');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickInsulin');
        $('.changeH').text("Insulin");
        $('.changeP').html("<p> Høyt karbohydratinntak over lengre tid vil ''trette ut'' kroppens insulin, det hormonet som regulerer sukkeromsetningen i kroppen. Resultatet blir at blodsukkeret stiger, og du er i ferd med å få type 2-diabetes. </p>");
    });

    $(".fettlever").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickBlodtrykk');
        $('.circle').addClass('clickFettlever');
        $('.changeH').text("Fettlever");
        $('.changeP').html(" <p> Dette er en tilstand hvor det er økt mengde fettvev i leveren. </p> <p> Noen nøyaktig forklaring på årsaken til denne typen fettlever har man ikke. Men det er en tydelig sammenheng mellom fettleversykdom og generell overvekt. En teori går ut på at kroppens følsomhet for insulin avtar. Dette fører til økt blodsukker og økt fettproduksjon både i lever og generelt i kroppen. </p>");
    });

    $(".blodtrykk").on("click", function () {
        $('.circle').removeClass('clickHjerte');
        $('.circle').removeClass('clickOvervekt');
        $('.circle').removeClass('clickDiabetes');
        $('.circle').removeClass('clickFettblod');
        $('.circle').removeClass('clickInsulin');
        $('.circle').removeClass('clickTannhygene');
        $('.circle').removeClass('clickFettlever');
        $('.circle').addClass('clickBlodtrykk');
        $('.changeH').html("<h3>Høyt </h3> <h3>blodtrykk</h3>");
        $('.changeP').html(" <p> Høyt blodtrykk kalles på fagspråket hypertensjon. Når legen måler blodtrykket ditt, måler de hvor hardt blodet presser mot veggene i blodårene. Blodtrykket er ikke konstant. Det kan variere betydelig med tiden på døgnet og hvilken situasjon du er i. Når gjennomsnittstrykket er forhøyet kalles det hypertensjon. </p> <p> Det er blodtrykket som driver blodet gjennom kroppen, og hvis trykket er for høyt over tid, kan det skade blodårene (karskade). Dette kan bidra til sykdommer som hjerteinfarkt, hjerneslag, øyeforandringer og nyreskade. </p>");
    });

});