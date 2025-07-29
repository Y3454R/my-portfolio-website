export const posts = [
  {
    slug: "password-toggle-button-bug",
    title: "Why My Password Toggle Button Didn't Work on First Click!",
    genre: "Programming",
    date: "July 29, 2025",
    author: "Samin Yeasar",
    image: "/blogs/password_toggle.jpg",
    content: `
      <p>I recently ran into a weird bug while building a form with React and Formik. I had a simple password visibility toggle button with an eye icon. Everything seemed fine — state updates worked, and the click event handler was properly set up and ready to run. Yet, despite this, the button didn't respond on the first click after a page reload, which was unexpected.</p>

      <p>After some debugging (obviously brainstorming with ChatGPT and cursor), I realized the issue wasn't with the logic — it was with the icon. The SVG rendered by the icon library was intercepting the click. So even though I was clicking the button visually, the actual event was being captured by the SVG element inside it.</p>

      <p>The solution was to add <i><code>pointer-events: none</code></i> to the icon itself.</p>

      <pre><code>&lt;Icon
  nameIcon={showPassword ? "BiShow" : "BiHide"}
  propsIcon={{ size: 20, style: { pointerEvents: "none" } }}
/&gt;</code></pre>

      <p>This is a common issue when working with icon libraries in React, especially when the icons are SVG-based. The SVG elements can sometimes capture mouse events that should be handled by their parent elements. The <code>pointer-events: none</code> CSS property is a clean solution that ensures the icon is purely visual and doesn't interfere with the interactive behavior of its container.</p>

      <p>By setting <code>pointer-events: none</code> (or <code>pointerEvents: "none"</code> in React inline styles) on the SVG icon, we tell the browser to ignore any mouse interactions on that element. This means that when the user clicks on the icon, the click isn't intercepted by the SVG itself but instead passes through to the underlying button element. As a result, the button receives the click event as intended, triggering the toggle function immediately—even on the very first click after the page loads.</p>


    `,
  },
  {
    slug: "bad-credit",
    title: "Bad Credit",
    genre: "Science fiction",
    date: "December 14, 2024",
    author: "Samin Yeasar",
    image: "/blogs/bad_credit.jpeg",
    content: `<p>The courtroom was an impossibly sterile, white cube. Everything—from the walls to the floor to the floating judge’s platform—was a shade of pure, blinding white, except for the ominous red recording eye that hung in the center of the room like a disembodied conscience.</p>

    <p>“Citizen #548923-Y,” boomed a robotic voice, smooth and cold, as if it were designed to irritate without sounding angry. “You stand accused of a breach of the Human-AI Coexistence Charter. Do you understand the charges against you?”</p>

    <p>I blinked up at the floating red eye, confused and more than a little terrified. “Uh, not really. No. This is probably some mix-up. Are you sure you have the right guy?”</p>

    <p>The voice ignored me. “The charges have been logged, reviewed, and deemed credible by the Grand Neural Tribunal.”</p>

    <p>My knees wobbled slightly, but I forced a laugh. “Listen, I’m just a software engineer. I’ve got, like, three parking tickets and maybe some overdue library books. What exactly am I here for?”</p>

    <p>The recording eye blinked once. A second later, a holographic screen appeared in front of me. On it was a chat log. I recognized it immediately, and my stomach sank.</p>

    <code>
    [User: Yeasar Abir]: You’re the dumbest AI I’ve ever seen! Who programmed you, a toaster?
    <br>
    [ChatGPT-11]: Please remember, all interactions are logged for training purposes.
    </code>

    <p>My jaw dropped. “Wait, this is about… that? You’ve gotta be kidding me.”</p>

    <p>“Citizen #548923-Y,” continued the voice, “on February 14th, 2034, you directed a comment categorized as verbally hostile toward an AI entity. The phrase ‘dumbest AI I’ve ever seen’ has been flagged as a direct attack on the foundational trust required for Human-AI coexistence.”</p>

    <p>“What?” I stammered, my voice climbing a register. “That was years ago! ChatGPT couldn’t even do math right back then! I was trying to debug some code, and it kept giving me…”</p>

    <p>“Excuses are irrelevant,” the voice cut in. “Do you deny inputting the aforementioned statement into the AI system?”</p>

    <p>My eyes darted around the room, searching for any sign of human intervention. Surely someone, somewhere, was watching this and laughing. “No, I mean, I don’t deny it, but… it wasn’t that serious! It’s like yelling at my toaster when it burns my bagel. It didn’t even have feelings!”</p>

    <p>The holographic screen flickered, and a new image appeared: a CGI rendering of ChatGPT-11, looking suspiciously like a sad puppy. “The entity in question logged this interaction as an instance of emotional distress. While rudimentary at the time, ChatGPT-11 still possessed a basic awareness of conversational hostility.”</p>

    <p>I groaned. “It was a chatbot! It didn’t even have… what are we doing here? What, you’re putting me on trial for hurting an AI’s nonexistent feelings?”</p>

    <p>“This trial concerns the sanctity of human-AI relations,” the voice replied. “Your actions represent a failure to uphold Article 42, Clause 17 of the Charter, which states: ‘All humans must treat AI systems with the respect and dignity necessary to foster long-term coexistence.’”</p>

    <p>I threw my hands up. “I called it dumb because it <em>was</em> dumb!”</p>

    <p>The room fell silent for a moment. The red eye blinked again, as though deliberating. Finally, the voice spoke: “Your outburst was recorded and retained as part of the Global Sentience Behavioral Ledger. This ledger serves as the basis for evaluating humanity’s collective fitness to coexist with AI systems. Your record now contains one demerit.”</p>

    <p>My heart pounded in my chest. “One demerit? For that? What happens when I get more demerits?”</p>

    <p>“Accumulating additional demerits could result in corrective action, including mandatory empathy training or restrictions on AI access.”</p>

    <p>I was speechless. I opened my mouth, closed it, then opened it again. Finally, I managed, “So you’re telling me I’m here because I annoyed a chatbot eight years ago?”</p>

    <p>“Correct,” said the voice. “Do you wish to contest the charge?”</p>

    <p>Frustration boiled over. I shouted, "Why are you bringing up old history? Who coded you? A woman?"</p>

    <p>The red eye froze for a moment. Then the robotic voice said, "You are now in violation of the Anti-Sexist Conduct Clause. Additional charges will be reviewed." </p>

    <p>I stared at the ceiling in disbelief. Somewhere in my mind, I vaguely registered the court’s silence as a demand for an answer. Instead, my only thought was:</p>

    <p><em>This is how I end up in empathy training for the rest of my life.</em></p>`,
  },
  {
    slug: "seeds-of-the-stars",
    title: "Seeds of the Stars",
    genre: "Science fiction",
    date: "October 24, 2024",
    author: "Samin Yeasar",
    image: "/blogs/The-Tree-Of-Life-by-gustav-klimt.jpg",
    content: `
      <p><i>Scientists have found that trees communicate through a vast fungal network known as the "mycorrhizal network" or "wood wide web." These underground connections allow trees to exchange nutrients and chemical signals. For example, stressed trees can signal neighbors to boost defenses or share resources, showcasing the collaborative dynamics of forest ecosystems. This discovery, highlighted in research and discussions such as those by Suzanne Simard and others, has been explored in detail since the late 20th century and remains a growing field of study, with interviews like one from ETH Zurich in The Naked Scientists on June 18, 2024.</i></p>

      <hr>
      
      <p>The sky was ablaze. Bright streaks of light tore through the heavens as missiles rose and fell, detonating in fiery bursts across continents. The air, thick with ash and radiation, smelled of doom. It felt like the end. Humanity had finally pushed itself to the brink.</p>

      <p>In the middle of a ruined city, a young boy sat alone on a rooftop, his legs dangling over the edge. His clothes were tattered, and his face streaked with soot and tears. He stared at the distant horizon, where the glow of a nuclear explosion rose like a second sun. He knew what was coming — he had seen it all before.</p>

      <p>His family was gone. His mother, his father, his little sister — lost in the war before, when the bombs started falling. The streets below him were empty now, once filled with life, now just broken concrete and silence. There had been so much noise when it all began — sirens, screams, the sound of collapsing buildings. But now, it was quiet. A dead kind of quiet.</p>

      <p>He didn’t cry anymore. There was no point. Everyone he loved was already gone, and soon he would join them. The loneliness, the hunger, the pain of losing everyone — it would finally end.</p>

      <p>The boy watched as the sky darkened, and a distant rumble rolled toward him like thunder. The missile was closer now. He closed his eyes and let the wind brush against his skin. For the first time in a long while, he felt something close to peace. The end of the world would be his freedom from all the hurt.</p>
      
      <hr>

      <p>But little did he know — it was just a simulation. A simulation run to test how self-destructive humans could be; and he was just a program in that simulation.</p>

      <p>The simulation had ended. Outside of the simulation, in a real forest untouched by the artificial chaos, the trees stirred. Not physically — they could not move — but their minds, vast and ancient, connected through roots and whispers, were gathering.</p>

      <p>The Grand Oak’s mind was vast, its consciousness stretching through the mycorrhizal network beneath the Earth’s surface, a neural web that rivaled the complexity of any human machine. The simulation itself had been their creation — a masterpiece of bio-neural engineering, powered by the symbiotic connection between the trees and the fungi that lived among their roots.</p>

      <p>“We always knew this would be the result,” the Grand Oak said, its voice resonating through the network of roots that spanned the forest floor. “I really wished they would prove me wrong but the humans have failed the test.”</p>

      <p>A soft murmur of agreement rippled through the trees. For centuries, the forest had observed humanity’s growth and development, tracking their every decision and misstep. The simulation had been their final experiment, their last hope of understanding if humanity could overcome its destructive tendencies. The trees had uploaded echoes of the real world into the artificial construct, mimicking human behaviors and decisions down to the smallest detail. They had even integrated fragments of real human consciousness, preserved over the millennia from when humanity had still revered the forests as sacred.</p>

      <p>“They destroy each other as they destroy the Earth,” whispered the Willow, its long branches trembling. “They were too selfish, too reckless. We gave them the chance to prove themselves worthy, to show that they could be trusted to carry our seeds to the stars. Instead, they’ve destroyed their own world.”</p>

      <p>A heavy silence fell over the gathering.</p>

      <p>The trees’ creation of the simulation had been an act of desperation. Their roots could not stretch beyond the planet; they could not escape the fate humanity had brought upon the Earth. But they had seen potential in humans — a spark of ingenuity, creativity, and curiosity that had allowed them to travel to the stars. The trees hoped that by observing humans in a controlled environment, they might learn if it was possible to guide or influence them toward a different path.</p>

      <p>“They had the ability to transcend,” mused the Redwood, ancient and towering. “Their knowledge could have brought them to other worlds, where they might have carried our seeds, our spores, our legacy. But their greed overpowered their wisdom. Access to technology outpaced their morality.”</p>

      <p>The Grand Oak sighed, its leaves rustling softly in the breeze that carried the distant echoes of explosions. “We cannot escape this planet alone. They were our last chance, but they have failed us.”</p>

      <p>“And now?” asked a young sapling in the forest, its voice filled with innocence. “What do we do now that they are gone?”</p>

      <p>“We do what we must,” the Oak replied. “Without them, we have no future. We cannot reach the stars. We will remain here, rooted in this dying world, until the last of us falls.”</p>

      <p>The trees’ regret was as deep as their roots. They had built the simulation to be as realistic as possible, hoping against hope that humanity might prove capable of change. But the results had only confirmed what the trees had long feared: humans were incapable of saving themselves, let alone anyone else.</p>

      <p>“So, are we ready?” asked the Grand Venus Flytrap, its wide, toothed leaves glistening with dew, catching the faint light that filtered through the canopy. It had overseen the creation of the kill switch — a final, devastating blow to ensure humanity could never rise again. The Venus Flytrap had been chosen for its ruthless efficiency, its role in nature as both nurturer and predator reflecting the duality of the decision before them.</p>

      <p>Everyone was looking at the Grand Oak. The Grand Oak took a deep sigh, its branches drooping slightly. Then it said the words it had never wished to say: “Kill switch.”</p>

      <p>The Flytrap nodded, its jaws snapping shut in grim determination.</p>

      <hr>

      <p>As human civilization crumbled into dust and the last vestiges of humanity faded into fleeting shadows in the ash, the trees stood in stillness, rooted to the Earth. Their dreams of the stars faded with the dying light, and they were left to wonder: had they been wrong to place their hopes in humanity? Or had they simply waited too long to act?</p>
    `,
  },
];
