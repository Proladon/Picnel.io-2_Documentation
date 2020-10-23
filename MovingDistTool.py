import shutil
import os
import time

src = 'Develop/docs/.vuepress/dist/'
dst = 'docs/'

shutil.rmtree(dst)

time.sleep(2)
os.mkdir(dst)
time.sleep(1)

for _ in os.listdir(src):
    shutil.move(os.path.join(src, _), dst)