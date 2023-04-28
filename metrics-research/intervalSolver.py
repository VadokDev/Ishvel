from pulp import *

# Definir las constantes
D = [2, 2, 2, 2, 3, 3, 3, 3]
P = [6.25, -37.5, -18.75, 0.0, 54.55, 50.0, 40.0, 26.32]

# Crear un problema de maximización
prob = LpProblem("Maximización de función", LpMaximize)

# Definir las variables
Ix = LpVariable.dicts("Ix", range(1, 6), lowBound=0, cat="Integer")
Sx = LpVariable.dicts("Sx", range(1, 6), lowBound=0, cat="Integer")

# Definir la función objetivo
func_obj = lpSum([lpSum([lpSum([lpSum([1 if D[i] == d and Ix[x] <= P[i] <= Sx[x] else 0 for i in range(len(P))]) for d in set(D)]) for x in range(1, 6)]),
                 lpSum([lpSum([lpSum([Sx[x], -Ix[x+1]])]) for x in range(1, 5)])])
prob += func_obj

# Agregar las restricciones
for x in range(1, 5):
    prob += Sx[x] >= Ix[x+1]

# Resolver el problema
prob.solve()


# Imprimir el resultado
print("Valor óptimo de la función objetivo:", value(prob.objective))
for v in prob.variables():
    print(v.name, "=", v.varValue)
