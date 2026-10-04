// ========================================
// BEYOND THE CHOICE
// Every choice affects someone.
// 5 LOCATIONS × 3 STAGES = 50 POINTS
// ========================================

let playerName = "";
let playerCharacter = "";

let score = 0;
let completedLocations = [];

let currentLocation = "";
let currentStage = 0;
let locationScore = 0;


// ========================================
// START GAME
// ========================================

function startGame() {

    score = 0;
    completedLocations = [];

    currentLocation = "";
    currentStage = 0;
    locationScore = 0;

    document.getElementById("game").innerHTML = `
        <h1>🌍 Beyond the Choice</h1>

        <h2>Before We Begin...</h2>

        <p>What should we call you?</p>

        <div class="nameBox">

            <input
                id="nameInput"
                type="text"
                placeholder="Enter your name"
                maxlength="20"
            >

            <br>

            <button onclick="saveName()">
                Continue →
            </button>

        </div>
    `;
}


// ========================================
// SAVE NAME
// ========================================

function saveName() {

    const input = document.getElementById("nameInput");

    playerName = input.value.trim();

    if (playerName === "") {
        playerName = "You";
    }

    chooseCharacterScreen();
}


// ========================================
// CHARACTER SELECTION
// ========================================

function chooseCharacterScreen() {

    document.getElementById("game").innerHTML = `

        <h1>👋 Welcome, ${playerName}!</h1>

        <h2>Choose Your Character</h2>

        <p>
            Choose the person you would like to play as.
        </p>

        <div class="characters">

            <button
                class="characterChoice"
                onclick="chooseCharacter('girl')"
            >

                ${createCharacter("girl")}

                <br>

                👩 Young Woman

            </button>


            <button
                class="characterChoice"
                onclick="chooseCharacter('boy')"
            >

                ${createCharacter("boy")}

                <br>

                👨 Young Man

            </button>

        </div>
    `;
}


// ========================================
// CHARACTER
// ========================================

function createCharacter(character) {

    return `
        <div class="character ${character}">

            <div class="hair ${
                character === "girl"
                ? "girlHair"
                : "boyHair"
            }"></div>

            <div class="head">

                <div class="eye leftEye"></div>
                <div class="eye rightEye"></div>

                <div class="mouth"></div>

            </div>

            <div class="neck"></div>

            <div class="body ${
                character === "girl"
                ? "girlBody"
                : "boyBody"
            }"></div>

            <div class="arm leftArm"></div>
            <div class="arm rightArm"></div>

            <div class="leg leftLeg"></div>
            <div class="leg rightLeg"></div>

            <div class="shoe leftShoe"></div>
            <div class="shoe rightShoe"></div>

        </div>
    `;
}


// ========================================
// READY SCREEN
// ========================================

function chooseCharacter(character) {

    playerCharacter = character;

    document.getElementById("game").innerHTML = `

        <h1>✨ Ready, ${playerName}?</h1>

        <div class="characterPreview">
            ${createCharacter(playerCharacter)}
        </div>

        <p>
            You live in an ordinary community.
        </p>

        <p>
            You will visit different places and meet
            different people.
        </p>

        <p>
            Some situations may seem ordinary at first.
            As you move through the community,
            you may discover that there is more
            happening than you first noticed.
        </p>

        <p>
            There will not always be an obvious
            right or wrong choice.
        </p>

        <button onclick="enterCommunity()">
            🏘️ Enter Community
        </button>
    `;
}


// ========================================
// COMMUNITY MAP
// ========================================

function enterCommunity() {

    document.getElementById("game").innerHTML = `

        <h1>🏘️ ${playerName}'s Community</h1>

        <div class="scoreBoard">
            ⭐ Score: ${score} / 50
        </div>

        <p>
            Choose a place to explore.
            You can visit the places in any order.
        </p>

        <div id="map">

            <div class="mapDecoration tree1">🌳</div>
            <div class="mapDecoration tree2">🌳</div>
            <div class="mapDecoration tree3">🌳</div>

            <div class="mapDecoration flower1">🌼</div>
            <div class="mapDecoration flower2">🌸</div>


            <button
                class="mapLocation home"
                onclick="visitLocation('home')"
            >
                🏠
                <span>Home</span>
            </button>


            <button
                class="mapLocation school"
                onclick="visitLocation('school')"
            >
                🏫
                <span>School</span>
            </button>


            <button
                class="mapLocation market"
                onclick="visitLocation('market')"
            >
                🏪
                <span>Market</span>
            </button>


            <button
                class="mapLocation hospital"
                onclick="visitLocation('hospital')"
            >
                🏥
                <span>Hospital</span>
            </button>


            <button
                class="mapLocation park"
                onclick="visitLocation('park')"
            >
                🌳
                <span>Park</span>
            </button>


            <div id="player">
                ${createCharacter(playerCharacter)}
            </div>

        </div>

        <p id="mapMessage">
            🚶 Choose a place to explore.
        </p>
    `;
}


// ========================================
// VISIT LOCATION
// ========================================

function visitLocation(location) {

    if (completedLocations.includes(location)) {

        document.getElementById("mapMessage").innerHTML = `
            ✅ You have already completed
            the ${location} journey.
        `;

        return;
    }

    const player = document.getElementById("player");

    const positions = {

        home: {
            left: "13%",
            top: "27%"
        },

        school: {
            left: "69%",
            top: "22%"
        },

        market: {
            left: "13%",
            top: "67%"
        },

        hospital: {
            left: "69%",
            top: "67%"
        },

        park: {
            left: "45%",
            top: "43%"
        }

    };

    player.style.left = positions[location].left;
    player.style.top = positions[location].top;

    document.getElementById("mapMessage").innerHTML = `
        🚶 ${playerName} is walking towards
        the ${location}...
    `;

    setTimeout(function () {
        startLocation(location);
    }, 1000);
}


// ========================================
// START LOCATION
// ========================================

function startLocation(location) {

    currentLocation = location;
    currentStage = 1;
    locationScore = 0;

    showStage();
}


// ========================================
// STAGE HEADER
// ========================================

function stageHeader(title) {

    return `
        <div class="scoreBoard">
            ⭐ Total Score: ${score} / 50
        </div>

        <p>
            📍 ${title}
            <br>
            Stage ${currentStage} of 3
        </p>
    `;
}


// ========================================
// SHOW STAGE
// ========================================

function showStage() {

    if (currentLocation === "home") {
        homeStage();
    }

    else if (currentLocation === "school") {
        schoolStage();
    }

    else if (currentLocation === "market") {
        marketStage();
    }

    else if (currentLocation === "hospital") {
        hospitalStage();
    }

    else if (currentLocation === "park") {
        parkStage();
    }
}


// ======================================================
// 🏠 HOME
// ======================================================

function homeStage() {

    let content = "";

    if (currentStage === 1) {

        content = `

            <p>
                You return home in the evening.
            </p>

            <p>
                One member of the family is preparing
                dinner while another is getting ready
                to go out for work.
            </p>

            <p>
                Someone asks for help with a few
                household tasks, but the request is
                directed to the same person who has
                already been busy all evening.
            </p>

            <p>
                The person looks tired but continues
                without saying anything.
            </p>

            <h3>What do you do?</h3>

            <button onclick="homeChoice1(1)">
                🤐 Stay quiet
            </button>

            <button onclick="homeChoice1(2)">
                💬 Offer to help
            </button>

            <button onclick="homeChoice1(3)">
                💬 Ask whether everyone can share
                the work
            </button>
        `;

    }

    else if (currentStage === 2) {

        content = `

            <p>
                Later, the conversation continues.
            </p>

            <p>
                One family member says,
                <em>"This is how we have always done things."</em>
            </p>

            <p>
                Another person explains that balancing
                work, household responsibilities and
                personal time has become difficult.
            </p>

            <p>
                You begin to notice that this is not
                about just one day's work.
                It has become a regular pattern.
            </p>

            <h3>How do you respond?</h3>

            <button onclick="homeChoice2(1)">
                😶 Say that traditions should not change
            </button>

            <button onclick="homeChoice2(2)">
                💬 Ask whether everyone can contribute
            </button>

            <button onclick="homeChoice2(3)">
                🤝 Suggest dividing tasks according
                to time and ability
            </button>
        `;

    }

    else {

        content = `

            <p>
                The family agrees to try sharing
                some responsibilities differently.
            </p>

            <p>
                For a few days, things seem easier.
                But old habits slowly begin returning.
            </p>

            <p>
                Someone suggests that the family
                should decide together how the work
                is shared.
            </p>

            <h3>What do you choose?</h3>

            <button onclick="homeChoice3(1)">
                😐 Let things continue naturally
            </button>

            <button onclick="homeChoice3(2)">
                🗓️ Create a simple shared routine
            </button>

            <button onclick="homeChoice3(3)">
                🤝 Make household decisions together
            </button>
        `;
    }

    document.getElementById("game").innerHTML = `
        <div class="storyBox">

            ${stageHeader("🏠 Home")}

            ${content}

        </div>
    `;
}


function homeChoice1(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 2;

    showStage();
}


function homeChoice2(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 3;

    showStage();
}


function homeChoice3(choice) {

    if (choice === 1) {

        locationScore += 0;

        finishLocation(
            "Home",
            "The family returned to its usual routine. The workload remained uneven."
        );

    }

    else if (choice === 2) {

        locationScore += 2;

        finishLocation(
            "Home",
            "A shared routine made responsibilities clearer and gave everyone a way to contribute."
        );

    }

    else {

        locationScore += 4;

        finishLocation(
            "Home",
            "The family began discussing responsibilities together instead of assuming one person would manage everything."
        );
    }
}


// ======================================================
// 🏫 SCHOOL
// ======================================================

function schoolStage() {

    let content = "";

    if (currentStage === 1) {

        content = `

            <p>
                You arrive at school just before
                the afternoon break.
            </p>

            <p>
                A group of students are discussing
                a project they are preparing together.
            </p>

            <p>
                One student stands nearby with a
                notebook but does not join them.
            </p>

            <p>
                When the teacher asks everyone to
                organise themselves into groups,
                the student quietly moves away.
            </p>

            <h3>What do you do?</h3>

            <button onclick="schoolChoice1(1)">
                🚶 Leave them alone
            </button>

            <button onclick="schoolChoice1(2)">
                💬 Ask if they want to join your group
            </button>

            <button onclick="schoolChoice1(3)">
                💬 Ask the group what happened
            </button>
        `;

    }

    else if (currentStage === 2) {

        content = `

            <p>
                Later that day, you see the same student
                sitting outside the classroom.
            </p>

            <p>
                They explain that this has happened
                more than once.
            </p>

            <p>
                Classmates sometimes make jokes about
                the way they speak and rarely include
                them in group activities.
            </p>

            <p>
                They have started thinking that it may
                be easier to stay quiet.
            </p>

            <h3>What do you do?</h3>

            <button onclick="schoolChoice2(1)">
                😶 Tell them to ignore it
            </button>

            <button onclick="schoolChoice2(2)">
                💬 Encourage them to speak with
                someone they trust
            </button>

            <button onclick="schoolChoice2(3)">
                🤝 Offer to go with them to speak
                with a teacher
            </button>
        `;

    }

    else {

        content = `

            <p>
                The next morning, the teacher notices
                that the student has not joined the
                group activity again.
            </p>

            <p>
                The teacher asks what could be done
                so everyone feels comfortable
                participating.
            </p>

            <p>
                You realise that simply telling one
                student to "be confident" may not
                change the way the group behaves.
            </p>

            <h3>What do you suggest?</h3>

            <button onclick="schoolChoice3(1)">
                😐 Wait and see
            </button>

            <button onclick="schoolChoice3(2)">
                💬 Encourage students to support
                one another
            </button>

            <button onclick="schoolChoice3(3)">
                🤝 Suggest an activity where
                everyone can participate
            </button>
        `;
    }

    document.getElementById("game").innerHTML = `
        <div class="storyBox">

            ${stageHeader("🏫 School")}

            ${content}

        </div>
    `;
}


function schoolChoice1(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 2;

    showStage();
}


function schoolChoice2(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 3;

    showStage();
}


function schoolChoice3(choice) {

    if (choice === 1) {

        locationScore += 0;

        finishLocation(
            "School",
            "The student continued keeping to themselves. The situation remained largely unchanged."
        );

    }

    else if (choice === 2) {

        locationScore += 2;

        finishLocation(
            "School",
            "Students began paying more attention to how they treated one another."
        );

    }

    else {

        locationScore += 4;

        finishLocation(
            "School",
            "The class created more opportunities for everyone to participate."
        );
    }
}


// ======================================================
// 🏪 MARKET
// ======================================================

function marketStage() {

    let content = "";

    if (currentStage === 1) {

        content = `

            <p>
                It is a busy afternoon at the market.
                You have come to buy a few things
                before going home.
            </p>

            <p>
                While walking past a small shop,
                you notice a young person arranging
                packets and helping customers.
            </p>

            <p>
                As you are about to leave,
                you notice a school bag underneath
                the counter.
            </p>

            <h3>What do you do?</h3>

            <button onclick="marketChoice1(1)">
                🚶 Continue shopping
            </button>

            <button onclick="marketChoice1(2)">
                💬 Ask the young person if they study
            </button>

            <button onclick="marketChoice1(3)">
                💬 Ask the shopkeeper about them
            </button>
        `;

    }

    else if (currentStage === 2) {

        content = `

            <p>
                The young person is still studying,
                but they have recently started spending
                more time at the shop.
            </p>

            <p>
                Things have become difficult for
                their family.
            </p>

            <p>
                Finally, they tell you:
                <em>
                "I want to continue studying.
                But my family needs the money too."
                </em>
            </p>

            <h3>What do you do next?</h3>

            <button onclick="marketChoice2(1)">
                📚 Tell them to focus only on school
            </button>

            <button onclick="marketChoice2(2)">
                💬 Ask what their family needs
            </button>

            <button onclick="marketChoice2(3)">
                🛍️ Suggest that they continue working
            </button>
        `;

    }

    else {

        content = `

            <p>
                The young person tells you that they
                have been thinking about leaving school
                if things at home become worse.
            </p>

            <p>
                The family depends on the income,
                so there is no simple solution.
            </p>

            <h3>What do you choose?</h3>

            <button onclick="marketChoice3(1)">
                🚶 Leave things as they are
            </button>

            <button onclick="marketChoice3(2)">
                💬 Help the family think about
                immediate options
            </button>

            <button onclick="marketChoice3(3)">
                🤝 Explore education and livelihood
                support
            </button>
        `;
    }

    document.getElementById("game").innerHTML = `
        <div class="storyBox">

            ${stageHeader("🏪 Market")}

            ${content}

        </div>
    `;
}


function marketChoice1(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 2;

    showStage();
}


function marketChoice2(choice) {

    if (choice === 1) locationScore += 1;
    if (choice === 2) locationScore += 3;
    if (choice === 3) locationScore += 1;

    currentStage = 3;

    showStage();
}


function marketChoice3(choice) {

    if (choice === 1) {

        locationScore += 0;

        finishLocation(
            "Market",
            "You left the situation unchanged. The young person continued balancing school and work."
        );

    }

    else if (choice === 2) {

        locationScore += 3;

        finishLocation(
            "Market",
            "You helped the family think through their immediate situation."
        );

    }

    else {

        locationScore += 4;

        finishLocation(
            "Market",
            "You considered both education and livelihood support, giving the young person a better possibility of continuing their studies."
        );
    }
}


// ======================================================
// 🏥 HOSPITAL
// ======================================================

function hospitalStage() {

    let content = "";

    if (currentStage === 1) {

        content = `

            <p>
                You arrive at the hospital for your
                own appointment.
            </p>

            <p>
                While waiting near reception, you notice
                an elderly person holding a prescription
                and looking repeatedly at the signs.
            </p>

            <p>
                They turn to you and ask,
                <em>"Do you know where I should go?"</em>
            </p>

            <h3>What do you do?</h3>

            <button onclick="hospitalChoice1(1)">
                🚶 Continue to your appointment
            </button>

            <button onclick="hospitalChoice1(2)">
                💬 Ask what they are looking for
            </button>

            <button onclick="hospitalChoice1(3)">
                🏥 Help them find the right counter
            </button>
        `;

    }

    else if (currentStage === 2) {

        content = `

            <p>
                During the conversation, you learn
                that the person has come alone.
            </p>

            <p>
                They still find it difficult to understand
                where to collect medicines and where
                to ask questions.
            </p>

            <p>
                Another patient approaches and asks
                a similar question.
            </p>

            <p>
                You begin to wonder whether this
                difficulty affects more people.
            </p>

            <h3>What do you do?</h3>

            <button onclick="hospitalChoice2(1)">
                😶 Tell them to ask at reception
            </button>

            <button onclick="hospitalChoice2(2)">
                💬 Help explain the process
            </button>

            <button onclick="hospitalChoice2(3)">
                🤝 Find an appropriate staff member
            </button>
        `;

    }

    else {

        content = `

            <p>
                Before leaving, you notice several
                patients checking the same signs and
                asking others for help.
            </p>

            <p>
                The staff are busy managing the queue.
            </p>

            <p>
                You realise that helping one person
                solves only that person's immediate
                difficulty.
            </p>

            <p>
                Clearer information might make the
                process easier for many people.
            </p>

            <h3>What do you choose?</h3>

            <button onclick="hospitalChoice3(1)">
                🚶 Leave after helping one person
            </button>

            <button onclick="hospitalChoice3(2)">
                📋 Suggest clearer directions
            </button>

            <button onclick="hospitalChoice3(3)">
                🤝 Suggest a patient-support
                information system
            </button>
        `;
    }

    document.getElementById("game").innerHTML = `
        <div class="storyBox">

            ${stageHeader("🏥 Hospital")}

            ${content}

        </div>
    `;
}


function hospitalChoice1(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 2;

    showStage();
}


function hospitalChoice2(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 3;

    showStage();
}


function hospitalChoice3(choice) {

    if (choice === 1) {

        locationScore += 0;

        finishLocation(
            "Hospital",
            "The person received immediate help, but the same difficulty remained for others."
        );

    }

    else if (choice === 2) {

        locationScore += 2;

        finishLocation(
            "Hospital",
            "Clearer directions could make the hospital easier to navigate."
        );

    }

    else {

        locationScore += 4;

        finishLocation(
            "Hospital",
            "You considered how simple information and support could make the hospital easier for many people to use."
        );
    }
}


// ======================================================
// 🌳 PARK
// ======================================================

function parkStage() {

    let content = "";

    if (currentStage === 1) {

        content = `

            <p>
                You stop at the park in the evening.
            </p>

            <p>
                Children are playing while a few
                residents are sitting nearby.
            </p>

            <p>
                As you walk further inside, you notice
                plastic covers and other waste collected
                near a water area.
            </p>

            <p>
                A resident notices you looking and says,
                <em>"It wasn't like this before."</em>
            </p>

            <h3>What do you do?</h3>

            <button onclick="parkChoice1(1)">
                🚶 Continue walking
            </button>

            <button onclick="parkChoice1(2)">
                🗑️ Pick up some of the waste
            </button>

            <button onclick="parkChoice1(3)">
                💬 Ask the residents what happened
            </button>
        `;

    }

    else if (currentStage === 2) {

        content = `

            <p>
                The residents explain that waste
                collection has become irregular.
            </p>

            <p>
                Some people have complained before,
                but after seeing little change,
                they stopped reporting it.
            </p>

            <p>
                One resident says,
                <em>
                "Everyone talks about it,
                but nobody knows what to do next."
                </em>
            </p>

            <h3>What do you do?</h3>

            <button onclick="parkChoice2(1)">
                😶 Ignore the complaints
            </button>

            <button onclick="parkChoice2(2)">
                📢 Encourage residents to report it
            </button>

            <button onclick="parkChoice2(3)">
                🤝 Discuss the problem together
            </button>
        `;

    }

    else {

        content = `

            <p>
                Several residents are now willing
                to do something about the park.
            </p>

            <p>
                Some suggest cleaning the area
                themselves that weekend.
            </p>

            <p>
                Someone else points out that the
                waste may return if collection
                remains irregular.
            </p>

            <h3>What do you choose?</h3>

            <button onclick="parkChoice3(1)">
                🧹 Clean it once and leave
            </button>

            <button onclick="parkChoice3(2)">
                🗓️ Organise occasional clean-ups
            </button>

            <button onclick="parkChoice3(3)">
                🤝 Work together to seek
                a regular solution
            </button>
        `;
    }

    document.getElementById("game").innerHTML = `
        <div class="storyBox">

            ${stageHeader("🌳 Park")}

            ${content}

        </div>
    `;
}


function parkChoice1(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 2;

    showStage();
}


function parkChoice2(choice) {

    if (choice === 1) locationScore += 0;
    if (choice === 2) locationScore += 2;
    if (choice === 3) locationScore += 3;

    currentStage = 3;

    showStage();
}


function parkChoice3(choice) {

    if (choice === 1) {

        locationScore += 0;

        finishLocation(
            "Park",
            "The park was cleaned for the moment, but the same problem could return."
        );

    }

    else if (choice === 2) {

        locationScore += 2;

        finishLocation(
            "Park",
            "Regular clean-ups helped keep the area better for some time."
        );

    }

    else {

        locationScore += 4;

        finishLocation(
            "Park",
            "Residents began working together to look for a more regular solution."
        );
    }
}


// ======================================================
// FINISH LOCATION + REFLECTION
// ======================================================

function finishLocation(location, message) {

    score += locationScore;

    completedLocations.push(location.toLowerCase());

    let reflection = "";

    if (location === "Home") {

        reflection =
            "Household responsibilities are not always shared equally. What may look like a normal family routine can affect people's time, opportunities and well-being.";

    }

    else if (location === "School") {

        reflection =
            "Feeling excluded can affect a person's confidence and participation. Creating an inclusive environment requires attention to how people treat and involve one another.";

    }

    else if (location === "Market") {

        reflection =
            "Education, work and family income can be closely connected. An individual's choices may be influenced by circumstances beyond their control.";

    }

    else if (location === "Hospital") {

        reflection =
            "Accessing a service is not only about whether the service exists. Clear information and support can make services easier for people to use.";

    }

    else if (location === "Park") {

        reflection =
            "Community spaces are shared by everyone. Long-term improvement often requires people to participate together and look beyond a one-time solution.";
    }


    document.getElementById("game").innerHTML = `

        <div class="storyBox">

            <h1>
                ✅ ${location} Completed
            </h1>

            <p>
                ${message}
            </p>

            <hr>

            <h3>
                ⭐ ${location} Score:
                ${locationScore} / 10
            </h3>

            <h3>
                🏆 Total Score:
                ${score} / 50
            </h3>

            <hr>

            <h3>
                💭 Think About It
            </h3>

            <p>
                ${reflection}
            </p>

            <button onclick="returnToMap()">
                🗺️ Return to Community
            </button>

        </div>
    `;
}


// ======================================================
// RETURN TO MAP
// ======================================================

function returnToMap() {

    if (completedLocations.length === 5) {

        finalResult();

    }

    else {

        enterCommunity();

    }
}


// ======================================================
// FINAL RESULT
// ======================================================

function finalResult() {

    let title;
    let message;

    if (score >= 41) {

        title = "🌟 Community Change-Maker";

        message =
            "You often looked beyond the immediate situation and considered how people and communities could be supported.";

    }

    else if (score >= 31) {

        title = "🤝 Community Supporter";

        message =
            "You recognised several concerns and made choices that created positive possibilities for change.";

    }

    else if (score >= 21) {

        title = "🌱 Growing Awareness";

        message =
            "You noticed several concerns, but some situations remained unresolved. Understanding social situations often takes time and more than one perspective.";

    }

    else if (score >= 11) {

        title = "👀 Observer";

        message =
            "You noticed some of the situations around you, but many opportunities to respond were left unexplored.";

    }

    else {

        title = "💭 The Community Still Needs You";

        message =
            "Many situations remained unchanged. Recognising that something is happening is often only the first step.";
    }


    document.getElementById("game").innerHTML = `

        <div class="storyBox">

            <h1>
                🏁 Community Journey Complete!
            </h1>

            <h2>
                ${title}
            </h2>

            <p>
                ${message}
            </p>

            <h2>
                ⭐ Final Score: ${score} / 50
            </h2>

            <hr>

            <h3>
                💭 Your Journey
            </h3>

            <p>
                Throughout the game, you encountered
                situations that initially appeared ordinary.
                As you learned more, you saw how individual
                experiences can be connected to families,
                institutions and the wider community.
            </p>

            <p>
                Social situations rarely have simple
                solutions. A choice that helps one person
                may not solve the larger problem.
            </p>

            <p>
                <strong>
                    🌍 Every choice affects someone.
                </strong>
            </p>

            <button onclick="startGame()">
                🔄 Play Again
            </button>

        </div>
    `;
}