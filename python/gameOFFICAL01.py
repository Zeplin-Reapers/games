from tkinter import *
from math import sqrt
from random import shuffle, randint
from time import sleep, time
now = time()
HEIGHT = 768
WIDTH = 1366
midX = WIDTH / 2
midY = HEIGHT / 2
window = Tk()
colors = ["darkred", "green", "blue", "purple", "pink", "lime"]
health = {
    "ammount" : 3,
    "color": "green"
}
window.title("Bubble Blaster")
c = Canvas(window, width=WIDTH, height=HEIGHT, bg="darkblue")
c.pack()
ship_id = c.create_polygon(5, 5, 5, 25, 30, 15, fill="green")
ship_id2 = c.create_oval(0, 0, 30, 30, outline="red")
SHIP_R = 15
MID_X = WIDTH / 2
MID_Y = HEIGHT / 2
c.move(ship_id, MID_X, MID_Y)
c.move(ship_id2, MID_X, MID_Y)
ship_spd = 10
score = 0
def move_ship(event):
    if event.keysym == "Up":
        c.move(ship_id, 0, -ship_spd)
        c.move(ship_id2, 0, -ship_spd)
    elif event.keysym == "Down":
        c.move(ship_id, 0, ship_spd)
        c.move(ship_id2, 0, ship_spd)
    elif event.keysym == "Left":
        c.move(ship_id, -ship_spd, 0)
        c.move(ship_id2,  -ship_spd, 0)
    elif event.keysym == "Right":
        c.move(ship_id, ship_spd, 0)
        c.move(ship_id2,  ship_spd, 0)
    elif event.keysym == "KeyPress-P":
        score += 10000
c.bind_all('<Key>', move_ship)
bub_id = list()
bub_r = list()
bub_speed = list()
bub_id_e = list()
bub_r_e = list()
bub_speed_e = list()
bub_id_r = list()
bub_r_r = list()
bub_speed_r = list()
min_bub_r = 10
max_bub_r = 30
max_bub_spd = 10
gap = 100
def create_bubble():
    x = WIDTH + gap
    y = randint(0, HEIGHT)
    r = randint(min_bub_r, max_bub_r)
    id1 = c.create_oval(x - r, y - r, x + r, y + r, outline="white", fill="lightblue")
    bub_id.append(id1)
    bub_r.append(r)
    bub_speed.append(randint(5, max_bub_spd))
def create_bubble_e():
    x = WIDTH + gap
    y = randint(0, HEIGHT)
    r = randint(min_bub_r, max_bub_r)
    id1 = c.create_oval(x - r, y - r, x + r, y + r, outline="black", fill="red")
    bub_id_e.append(id1)
    bub_r_e.append(r)
    bub_speed_e.append(randint(6, max_bub_spd))
def create_bubble_r():
    x = WIDTH + gap
    y = randint(0, HEIGHT)
    r = randint(min_bub_r, max_bub_r)
    id1 = c.create_oval(x - r, y - r, x + r, y + r, outline="white", fill=colors[0])
    bub_id_r.append(id1)
    bub_r_r.append(r)
    bub_speed_r.append(randint(6, max_bub_spd))
def move_bubbles():
    for i in range(len(bub_id)):
        c.move(bub_id[i], -bub_speed[i], 0)
    for i in range(len(bub_id_e)):
        c.move(bub_id_e[i], -bub_speed_e[i], 0)
    for i in range(len(bub_id_r)):
        c.move(bub_id_r[i], -bub_speed_r[i], 0)
bub_chance = 30
def get_coords(id_num):
    pos = c.coords(id_num)
    x = (pos[0] + pos[2]) / 2
    y = (pos[1] + pos[3]) / 2
    return x, y
def del_bubble(i):
    del bub_r[i]
    del bub_speed[i]
    c.delete(bub_id[i])
    del bub_id[i]
def del_bubble_r(i):
    del bub_r_r[i]
    del bub_speed_r[i]
    c.delete(bub_id_r[i])
    del bub_id_r[i]
def clean():
    for i in range(len(bub_id) -1, -1, -1):
        x, y = get_coords(bub_id[i])
        if x < -gap:
            del_bubble(i)
def distance(id1, id2):
    x1, y1 = get_coords(id1)
    x2, y2 = get_coords(id2)
    return sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
def  collision():
    points = 0
    for bub in range(len(bub_id) -1, -1, -1):
        if distance(ship_id2, bub_id[bub]) < (SHIP_R + bub_r[bub]):
            points += (bub_r[bub] + bub_speed[bub])
            del_bubble(bub)
    return points
def cleanAll():
    for i in range(len(bub_id) -1, -1, -1):
        x, y = get_coords(bub_id[i])
        del_bubble(i)
def  collision_e():
    for bub in range(len(bub_id_e) -1, -1, -1):
        if distance(ship_id2, bub_id_e[bub]) < (SHIP_R + bub_r_e[bub]):
            break
            c.create_text(midY, midX, text="SCORE", fill="white", font="arial 40") 
            sleep(100)
count = 0
lol = False
def  collision_r():
    points = 0
    for bub in range(len(bub_id_r) -1, -1, -1):
        if distance(ship_id2, bub_id_r[bub]) < (SHIP_R + bub_r_r[bub]):
            points += 200
            del_bubble_r(bub)
    return points
c.create_text(50, 30, text="SCORE", fill="white")
st = c.create_text(50, 50, fill="white")
c.create_text(100, 30, text="TIME", fill="white")
tt = c.create_text(100, 50, fill="white")
def show(score):
    c.itemconfig(st, text=str(score))
evil_bub = 50
#MAIN GAME LOOP
while True:
    if lol == True:
      count += 0.01
    if randint(1, bub_chance) == 1:
        create_bubble()
    if randint(1, evil_bub) == 1:
        create_bubble_e()
    if randint(1, 100) == 1:
        create_bubble_r()
    if time() >= now + 100:
        print("lols")
    move_bubbles()
    collision_e()
    collision_r()
    clean()
    score += collision()
    score += collision_r()
    if score >= 400:
        evil_bub = 40
        bub_chance = 25
        if score >= 1000:
            evil_bub = 30
            bub_chance = 20
    show(score)
    shuffle(colors)
    window.update
    sleep(0.01)
