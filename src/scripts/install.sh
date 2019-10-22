# /bin/bash

echo "Start init the project dir"
# enter the work dir
echo "Enter directory $1"
cd $1;

# do git init
git init;
git add .;
git commit -m "first commit";
git subtree add --prefix=base http://git.okjiaoyu.cn/front-end/oms-base.git  dev --squash

echo "git subtree 'oms-base' has been added at dir 'base' "