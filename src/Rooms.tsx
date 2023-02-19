interface Room {
    id: string;
    name: string;
    description: string;
    doors: { id: string, leadsTo: string }[];
  }
  
  const rooms: Room[] = [
    {
      id: '1',
      name: 'Room 1',
      description: 'This is room 1',
      doors: [
        { id: 'door1', leadsTo: '2' },
        { id: 'door2', leadsTo: '3' }
      ]
    },
    {
      id: '2',
      name: 'Room 2',
      description: 'This is room 2',
      doors: [
        { id: 'door1', leadsTo: '1' },
        { id: 'door3', leadsTo: '3' }
      ]
    },
    {
      id: '3',
      name: 'Room 3',
      description: 'This is room 3',
      doors: [
        { id: 'door2', leadsTo: '1' },
        { id: 'door3', leadsTo: '2' }
      ]
    }
  ];