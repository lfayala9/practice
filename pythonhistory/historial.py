import os
import sqlite3
from time import sleep
from random import randrange
NAMEFILE = "Historial_Chrome.txt"


def file(user_path, urls):
    if os.name == 'nt':
        h_file = open(user_path + "\\Desktop\\" + NAMEFILE, "w", encoding= 'utf -8')
        h_file.write("Este es tu historial de Chrome en Windows: \n")
    elif os.name == 'posix':
        h_file = open(user_path + "/Escritorio/" + NAMEFILE, "w", encoding= 'utf -8')
        h_file.write("Este es tu historial de Chrome en Linux: \n")
    for i in urls:
            h_file.write("\n"
                        "\n"
                        "\n")
            for x in i:
                h_file.write(x)
    return h_file


'''''
def delay():
    n_horas = randrange(1, 3)
    n_minutos = randrange(1, 59)
    print("Estas durmiendo {} horas y {} minutos".format(n_horas, n_minutos))
    sleep(n_horas * 60 * 60)
    sleep(n_minutos * 60)
'''

def chrome_history(history_path):
    try:
        con = sqlite3.connect(history_path)
        cursor = con.cursor()
        cursor.execute("SELECT title, url FROM urls ORDER BY last_visit_time DESC")
        urls = cursor.fetchall()
        con.close()
        return urls
    except sqlite3.OperationalError:
        return None


def main():
    '''''
    #Esperamos "x" cantidad de horas para que se ejecute, no me gusta asi
    delay()
    '''
    history_path = None
    user_path = None
    #Buscamos la ruta del desktop y determinamos si es Linux o Windows
    if os.name == 'nt':
        user_path = "C:\\Users\\" + os.getlogin()
        history_path = user_path + "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History"
    elif os.name == 'posix':
        user_path = "/home/" + os.getlogin()
        history_path = user_path + "/.config/google-chrome/Default/History"
    #Vemos el historia de Chrome
    chrome = chrome_history(history_path)
    #Creamos el Archivo
    h_file = file(user_path, chrome)

if __name__ == "__main__":
    main()
