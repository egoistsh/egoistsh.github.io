#!/bin/zsh

# 确保脚本抛出遇到的错误
set -e

push_addr=`git@github.com:egoistsh/egoistsh.github.io.git` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info=`deploy`
dist_path=kaze-vuepress-doc/docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=pages # 推送的分支

# 生成静态文件
# npm run build
yarn build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "$commit_info"
git push -f $push_addr HEAD:$push_branch
# git push -f git@github.com:egoistsh/egoistsh.github.io.git HEAD:pages

cd -
rm -rf $dist_path