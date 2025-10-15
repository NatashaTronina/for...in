export function specialAttackData({ special }) {
    const attackData = special.map(attack => {

    const { id, name, icon, description = 'Описание недоступно' } = attack;

    return {
      id,
      name,
      description,
      icon
    };
  });

  return attackData;
}