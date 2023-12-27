#Limpando o cache do projeto
# yarn start --reset-cache

#Limpando a build do ios
cd ios
rm -rf build
cd ..

echo "BUILD EXCLUIDO"

#Removendo a pasta 'DerivedData'
rm -rf ~/Library/Developer/Xcode/DerivedData

echo "PASTA DERIVEDDATA EXCLUIDA"

# Atualizando Pods
cd ios
pod install
cd ..

echo "PODS ATUALIZADOS"

echo "FINISH"
