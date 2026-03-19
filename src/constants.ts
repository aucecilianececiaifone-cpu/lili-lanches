import { MenuItem } from './types';

export const MENU_DATA: MenuItem[] = [
  // CACHORRO QUENTE
  { id: 'cq-01', name: '01 Salsicha', price: 10.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-02', name: '02 Salsichas', price: 12.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-03', name: '03 Salsichas', price: 14.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-04', name: '01 Linguiça', price: 12.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-05', name: '02 Linguiças', price: 14.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-06', name: 'Frango', price: 13.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-07', name: 'Salsicha+Linguiça', price: 14.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-08', name: 'Frango com Salsicha ou Linguiça', price: 15.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-09', name: 'Com tudo (Salsicha+Frango+Linguiça + 2 Ovos de codorna)', price: 16.00, category: 'CACHORRO QUENTE' },
  { id: 'cq-10', name: 'Dogão (Salsicha+Frango+Linguiça + 2 Ovos de Codorna + Bacon)', price: 18.00, category: 'CACHORRO QUENTE' },

  // HAMBÚRGUER / DUPLOS
  { id: 'hd-01', name: 'X-Burguer Duplo', description: '(2 Bifes, 2 Queijos e acompanhamentos)', price: 17.00, category: 'HAMBÚRGUER / DUPLOS' },
  { id: 'hd-02', name: 'X-Presunto Duplo', description: '(2 Bifes, 2 Queijos, 2 Presuntos e acompanhamentos)', price: 18.00, category: 'HAMBÚRGUER / DUPLOS' },
  { id: 'hd-03', name: 'X-Egg Duplo', description: '(2 Bifes, 2 Queijos, 2 Ovos e acomp.)', price: 19.00, category: 'HAMBÚRGUER / DUPLOS' },
  { id: 'hd-04', name: 'X-Bacon Duplo', description: '(2 Bifes, 2 Queijos, 2 Bacons e acomp.)', price: 22.00, category: 'HAMBÚRGUER / DUPLOS' },
  { id: 'hd-05', name: 'X-Egg-Bacon Duplo', description: '(2 Bifes, 2 Queijos, 2 Ovos, 2 Bacons e acomp.)', price: 23.00, category: 'HAMBÚRGUER / DUPLOS' },

  // ESPETINHOS
  { id: 'es-01', name: 'Frango', price: 10.00, category: 'ESPETINHOS' },
  { id: 'es-02', name: 'Linguiça', price: 10.00, category: 'ESPETINHOS' },

  // ADICIONAIS
  { id: 'ad-01', name: 'Ovo de Codorna', price: 1.00, category: 'ADICIONAIS' },
  { id: 'ad-02', name: 'Salsicha', price: 2.50, category: 'ADICIONAIS' },
  { id: 'ad-03', name: 'Linguiça', price: 3.00, category: 'ADICIONAIS' },
  { id: 'ad-04', name: 'Bacon', price: 4.00, category: 'ADICIONAIS' },
  { id: 'ad-05', name: 'Cheddar/Catupiry', price: 4.00, category: 'ADICIONAIS' },
  { id: 'ad-06', name: 'Mussarela 1 fatia', price: 1.50, category: 'ADICIONAIS' },
  { id: 'ad-07', name: 'Presunto 2 fatias', price: 2.00, category: 'ADICIONAIS' },
  { id: 'ad-08', name: 'Maionese pequena', price: 0.50, category: 'ADICIONAIS' },

  // BEBIDAS
  { id: 'be-01', name: 'Mini Lata - Sabores', price: 4.00, category: 'BEBIDAS' },
  { id: 'be-02', name: 'Lata 350 ml - Sabores', price: 6.00, category: 'BEBIDAS' },
  { id: 'be-03', name: 'Pet 600 ml - Sabores', price: 8.00, category: 'BEBIDAS' },
  { id: 'be-04', name: '2l Coca Cola', price: 15.00, category: 'BEBIDAS' },
  { id: 'be-05', name: '2l Fanta Uva/ Laranja', price: 14.00, category: 'BEBIDAS' },
  { id: 'be-06', name: '2l Kuat', price: 12.00, category: 'BEBIDAS' },
  { id: 'be-07', name: 'Suco Guaramil - Sabores', price: 3.00, category: 'BEBIDAS' },
  { id: 'be-08', name: 'Cerveja Latão', price: 8.00, category: 'BEBIDAS' },
  { id: 'be-09', name: 'Água mineral s/gás', price: 3.00, category: 'BEBIDAS' },
  { id: 'be-10', name: 'Água mineral c/gás', price: 4.00, category: 'BEBIDAS' },

  // BIFE BOVINO
  { id: 'bb-01', name: 'Misto Quente', description: '(3 Fatias Presunto e 2 Fatias Queijo)', price: 9.00, category: 'BIFE BOVINO' },
  { id: 'bb-02', name: 'Hambúrguer', description: '(Bife e acompanhamentos)', price: 10.00, category: 'BIFE BOVINO' },
  { id: 'bb-03', name: 'X-Burguer', description: '(Bife, Queijo e acompanhamentos)', price: 11.00, category: 'BIFE BOVINO' },
  { id: 'bb-04', name: 'X-Presunto', description: '(Bife, Queijo, Presunto e acompanhamentos)', price: 13.00, category: 'BIFE BOVINO' },
  { id: 'bb-05', name: 'X-Egg', description: '(Bife, Queijo, Ovo e acompanhamentos)', price: 13.00, category: 'BIFE BOVINO' },
  { id: 'bb-06', name: 'X-Bacon', description: '(Bife, Queijo, Bacon e acompanhamentos)', price: 16.00, category: 'BIFE BOVINO' },
  { id: 'bb-07', name: 'X-Egg Bacon', description: '(Bife, Queijo, Ovo, Bacon e acompanhamentos)', price: 16.00, category: 'BIFE BOVINO' },
  { id: 'bb-08', name: 'X-Tudo', description: '(Bife, Queijo, Ovo, Bacon, Presunto e acompanhamentos)', price: 17.00, category: 'BIFE BOVINO' },
  { id: 'bb-09', name: 'X-Tudo 2', description: '(2 Bifes, Queijo, Ovo, Bacon, Presunto e acompanhamentos)', price: 19.00, category: 'BIFE BOVINO' },

  // FILÉ DE PEITO EM CUBOS
  { id: 'fp-01', name: 'Frangote', description: '(Frango e acompanhamentos)', price: 12.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-02', name: 'X-Frango', description: '(Frango, Queijo e acompanhamentos)', price: 14.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-03', name: 'X-Frango Presunto', description: '(Frango, Queijo, Presunto e acompanhamentos)', price: 15.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-04', name: 'X-Frango Egg', description: '(Frango, Queijo, Ovo e acompanhamentos)', price: 16.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-05', name: 'X-Frango Bacon', description: '(Frango, Queijo, Bacon e acompanhamentos)', price: 17.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-06', name: 'X-Frango Egg Bacon', description: '(Frango, Queijo, Ovo, Bacon e acompanhamentos)', price: 17.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-07', name: 'X-Tudo Frango', description: '(Frango, Queijo, Ovo, Bacon, Presunto e acompanhamentos)', price: 19.00, category: 'FILÉ DE PEITO EM CUBOS' },
  { id: 'fp-08', name: 'X-Tudo Frango 2', description: '(2 Frangos, Queijo, Ovo, Bacon, Presunto e acompanhamentos)', price: 20.00, category: 'FILÉ DE PEITO EM CUBOS' },

  // ESPECIAIS DA CASA
  { id: 'ec-01', name: 'Da Casa 1', description: '(2 Bifes, Queijo, 2 Ovos, Bacon, Presunto e acompanhamentos)', price: 21.00, category: 'ESPECIAIS DA CASA' },
  { id: 'ec-02', name: 'Da Casa 2', description: '(2 Bifes, Frango, Queijo, 1 Ovo, Bacon, Presunto e acomp.)', price: 23.00, category: 'ESPECIAIS DA CASA' },
  { id: 'ec-03', name: 'Especial Duplo', description: '(2 Bifes, 2 Queijos, 2 Ovos, 2 Bacon, 2 Presuntos e acomp.)', price: 24.00, category: 'ESPECIAIS DA CASA' },
  { id: 'ec-04', name: 'X Tudo Mega', description: '( 2 Bifes, Frango, 2 Queijos, 2 Ovos, 1 Bacon, 2 Presuntos e ac. )', price: 26.00, category: 'ESPECIAIS DA CASA' },
  { id: 'ec-05', name: 'Big Tudo', description: '( 3 Bifes, 2 Queijos, 2 Presuntos, 2 Ovos, 1 Bacon, 1 Linguiça e acompanhamentos )', price: 27.00, category: 'ESPECIAIS DA CASA' },

  // ACRÉSCIMOS
  { id: 'ac-01', name: 'Catupiry', price: 4.00, category: 'ACRÉSCIMOS' },
  { id: 'ac-02', name: 'Bife', price: 3.00, category: 'ACRÉSCIMOS' },
  { id: 'ac-03', name: 'Cheddar', price: 4.00, category: 'ACRÉSCIMOS' },
  { id: 'ac-04', name: 'Ovo', price: 2.00, category: 'ACRÉSCIMOS' },
];
