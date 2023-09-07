class MySet:
    def __init__(self):
        """Initializes an empty set. Storing new unduplicated entries in a python list"""
        self._data = []

    def has(self, e):
        """Returns true if the set contains a given element"""
        for i in range(len(self._data)):
            if self._data[i] == e:
                return True
        return False
    
    def add(self, e):
        """Adds an element to the set if doesn't already exist"""
        if self.has(e):
            return
        self._data.append(e)

    def __len__(self):
        return len(self._data)
    


if __name__ == '__main__':
    s = MySet()
    s.add(1)
    s.add(2)
    print(len(s))
    print(s.has(1))
    print(s.has(7))