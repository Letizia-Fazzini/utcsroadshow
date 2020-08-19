## UTCS Roadshow Website

Notes for future officers of CS Roadshow

in repo:
- npm start
- in browser, go to localhost:3000 to check changes until you're satisfied

tips:
- make sure to put all images in src, not public
- linux filenames ARE case-sensitive
- make sure homepage field in package.json is correct

once you're done editing:
- npm run build (this will create a minified version of the website in the build folder)
- ssh into a lab machine and delete all the files in the CS Roadshow folder
- navigate to the build folder and copy all the files to the roadshow folder: scp -r * <username>@carmen.cs.utexas.edu:<path to roadshow folder>
- run chmod -R 755 * in the roadshow folder to set permissions
