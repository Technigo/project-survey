
// Re-usable function for converting an excitement value to a corresponding string
export const excitementFunction = excitementLevel => {
  switch (true) {
    case excitementLevel < 20:
      return 'Bah - humbug';
    case excitementLevel < 40:
      return 'Parents of 10 kids';
    case excitementLevel < 60:
      return 'Christmas is OK';
    case excitementLevel < 80:
      return 'I like the sparkling lights';
    case excitementLevel < 95:
      return 'Rudolph';
    default:
      return 'Santa Claus';
  }
};
