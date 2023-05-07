from math import cos
from math import sin
from math import sqrt
from math import pi

# Entrada de datos
print('*** Kiwi ayuda al Coyote ***')
print('Ingrese los siguientes datos:\n')
x_coyote = float(input('Coordenada x del Correcaminos: '))
v = float(input('Velocidad inicial de lanzamiento (kms/h): '))
alfa = float(input('Ángulo de lanzamiento, expresado (grados): '))
xi = float(input('Coordenada x del lanzamiento (Coyote): '))
yi = float(input('Coordenada y del lanzamiento (Coyote): '))

#Conversión de unidades y descomposición de la velocidad
print('\nValores ajustados:')
v = v*1000/3600
print('Velocidad =', round(v,5), 'm/s')
alfa = alfa*pi/180
print('Angulo de lanzamiento =', round(alfa,5), 'radianes')
vx = v*cos(alfa)
vy = v*sin(alfa)
print('vx =', round(vx,5), 'm/s')
print('vy =', round(vy,5), 'm/s')

# Cálculo del tiempo de impacto, resolviendo la ecuación de segundo grado
print('\nEvaluación del lanzamiento:')
a = -4.9
b = vy
c = yi
d = b**2 -4*a*c
t_impacto = (-b-sqrt(d))/(2*a)
print('Tiempo de impacto estimado:', round(t_impacto,5), 's')

#Posición del proyectil en los primeros 4 puntos
#1
t = 0
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1
#2
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1
#3
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1
#4
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1

#Posición del proyectil en los últimos 3 puntos
#1
t = t_impacto-0.3
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1
#2
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1
#3
x = xi + vx*t
y = yi + vy*t - 4.9*t**2
print('En tiempo', round(t,5), 'el proyectil se encuentra en:', round(x,5), round(y,5))
t += 0.1

#Determinación de la posición de impacto (cuando t=t_impacto) y cálculo de error
x_impacto=xi+vx*t_impacto
print('Proyectil impacta en coordenada x:', round(x_impacto,2))
print('Se falló al Correcaminos por:', round(x_impacto-x_coyote,2), 'm')
