import dropbox
dropbox_access_token= "sl.BJhOusa9H0yy2pWRSv-Cy98w7m77Vo4q2n4L4R1o8kWAoiNTE2X5BcauJVqZFreYwp800UCPlB4ktAsm6nWhWkBXK_m5A1NDFNN25AoDfJYdNG92GB-MwPsRIsHlZMKubhiWdE1UJqC3"
dropbox_path= "/hi.txt"
computer_path=r"D:\Saas\hi.txt"
client = dropbox.Dropbox(dropbox_access_token)
print("[SUCCESS] dropbox account linked")
client.files_upload(open(computer_path, "rb").read(), dropbox_path)
print("[UPLOADED] {}".format(computer_path))

metadata, f = client.files_download('/hi.txt')
out = open("hi_download.txt", 'wb')
out.write(f.content)
out.close()
print("[SUCCESS] downloaded")
