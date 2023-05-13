# PostgreSQL Lab


## Commands

### Crate database 
```
CREATE DATABASE productos;
```

### Create table
```
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  inventario INTEGER NOT NULL
);
```

### Select all elements
```
select * from productos
```

**Schema (MySQL v5.7)**

    CREATE TABLE productos (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      descripcion TEXT,
      precio DECIMAL(10, 2) NOT NULL,
      inventario INTEGER NOT NULL
    );
    INSERT INTO productos (nombre, descripcion, precio, inventario)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200);

---

**Query #1**

    select * from productos;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripción del producto 2 | 19.99  | 50         |
| 3   | Producto 3 | Descripción del producto 3 | 5.99   | 200        |

---

[View on DB Fiddle](https://www.db-fiddle.com/)


### Select element 
```
select * from productos  where nombre = 'Producto 1'
```
**Schema (MySQL v5.7)**

    CREATE DATABASE productos;
    CREATE TABLE productos (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      descripcion TEXT,
      precio DECIMAL(10, 2) NOT NULL,
      inventario INTEGER NOT NULL
    );
    INSERT INTO productos (nombre, descripcion, precio, inventario)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200);

---

**Query #1**

    select * from productos  where nombre = 'Producto 1';

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripción del producto 1 | 10.99  | 100        |

---

[View on DB Fiddle](https://www.db-fiddle.com/)


### Insert element 
```
INSERT INTO productos (nombre, descripcion, precio, inventario)
VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
       ('Producto 2', 'Descripción del producto 2', 19.99, 50),
       ('Producto 3', 'Descripción del producto 3', 5.99, 200);
```

### Update element in the collection
```
update productos set nombre='test productos' where id=1
```

### Delete element
```
 delete  from productos p where id=1
```