const myAdvices = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis cumque obcaecati fuga maiores dolorum illo numquam fugiat repellendus praesentium non, animi sunt ducimus harum excepturi ea adipisci accusantium aspernatur?",
  "Quisquam quam sequi blanditiis similique dolorem, esse quaerat nostrum totam maxime cum? Deleniti atque ducimus, dolore dicta, maiores modi mollitia ullam sunt cupiditate est voluptatibus et esse, saepe minus error.",
  "Quam recusandae explicabo sit alias soluta non mollitia aliquid enim quis, fuga quod obcaecati esse odio, iusto, blanditiis voluptatibus veritatis aut dolore? Reiciendis incidunt quae dignissimos numquam! Ut, fuga soluta?",
  "Maiores, cupiditate hic? Harum nobis molestias aspernatur quisquam quibusdam corporis sit! At magni cumque suscipit voluptates dicta quae velit in architecto et dolor provident exercitationem soluta consequuntur, maxime accusamus recusandae.",
];

lastIndex = 0;

const cardText = document.querySelector(".card-text");
const cardID = document.querySelector(".card-title");

document.querySelector(".diceButton").addEventListener("click", function () {
  cardID.innerHTML = "ADVICE #" + (myAdvices.indexOf(myAdvices[lastIndex]) + 1);
  cardText.innerHTML = myAdvices[lastIndex];

  if (lastIndex === myAdvices.length - 1) {
    lastIndex = 0;
  } else {
    lastIndex++;
  }
});
