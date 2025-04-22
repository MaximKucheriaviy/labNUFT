import Levenshtein
import re
import nltk
from nltk.corpus import wordnet as wn;
# nltk.download('wordnet')
print("Кучерявий Максим Вікторович КН-1-3м лабораторна 1")
print('\n')

def clean_text(text):
    text = re.sub(r'[\t\n\r]', ' ', text)
    text = re.sub(r'[^\w ]', '', text, flags=re.UNICODE)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


noun1 = "might"
noun2 = "right"

synsets1 = wn.synsets(noun1)
synsets2 = wn.synsets(noun2)


# визначення............................................
print("nou1 definitions")
for s in synsets1:
    print(s.name() + ":", s.definition())
print('\n')

print("nou2 definitions")
for s in synsets2:
    print(s.name() + ":", s.definition())
print('\n')


# гіпероніми .....................................
print(noun1, "hypernyms")
for hypernyms in synsets1[0].hypernyms():
    print(hypernyms.name())
print('\n')

print(noun2, "hypernyms")
for hypernyms in synsets2[0].hypernyms():
    print(hypernyms.name())
print('\n')

# гіпоніми .......................................... 
print(noun1, "hyponyms")
for hyponyms in synsets1[0].hyponyms():
    print(hyponyms.name())
print('\n')

print(noun2, "hyponyms")
for hyponyms in synsets2[0].hyponyms():
    print(hyponyms.name())
print('\n')



# ........................подібність

ps = synsets1[0].path_similarity(synsets2[0])
wps = synsets1[0].wup_similarity(synsets2[0])
lcs = synsets1[0].lch_similarity(synsets2[0])
print("path_similarity", ps)
print("wup_similarity", wps)
print("lch_similarity", lcs)
print("\n")


# ........................................................ Левенштейн
lDist = Levenshtein.distance(noun1, noun2)
print("Levenshtein distance", lDist)
print('\n')

#....................... Найближчі слова з словника 1-1000.txt

file = open("./1-1000.txt")
lib1000 = file.read()
file.close()
lib1000 = lib1000.split('\n')

inputWord = input("Enter word: ")
wordDistance = []
inputWordSynset = wn.synsets(inputWord)
inputWordSynset = inputWordSynset[0]
for item in lib1000:
    itemSynset = wn.synsets(item)
    trig = True
    if len(itemSynset) != 0:
        trig = False
        itemSynset = itemSynset[0]

    wordDistance.append({
        "word": item,
        "lev": Levenshtein.distance(inputWord, item),
        "pds": 0 if trig else inputWordSynset.path_similarity(itemSynset)
    })


wordDistance.sort(key=lambda x: (-x['pds'], x['lev']))

for i in range(0, 7):
    print(wordDistance[i]["word"], wordDistance[i]["pds"], wordDistance[i]["lev"])


# ..................... Найближчі слова з тексту  chesterton-ball.txt
file = open("./lib.txt")
lib = file.read()
file.close()
lib = clean_text(lib)
lib = lib.lower()
lib = lib.split()


textWordFrq = []

for word in lib:
    triger = False
    for item in textWordFrq:
        if item["word"] == word:
            triger = True
            item["count"] += 1
            break
    if not triger:
        textWordFrq.append({
            "word": word,
            "count": 1
        })
textWordFrq.sort(key=lambda x: (-x['count']))
result = []
for item in textWordFrq:
    result.append(item["word"])

lineToWrite = '\n'.join(result)
file = open("./result.txt", 'w')
file.write(lineToWrite)
file.close()

print('\n')


inputWord = input("Enter word: ")
wordDistance = []

inputWordSynset = wn.synsets(inputWord)
inputWordSynset = inputWordSynset[0]
for item in result:
    itemSynset = wn.synsets(item)
    trig = True
    if len(itemSynset) != 0:
        trig = False
        itemSynset = itemSynset[0]

    wordDistance.append({
        "word": item,
        "lev": Levenshtein.distance(inputWord, item),
        "pds": 0 if trig else inputWordSynset.path_similarity(itemSynset)
    })


wordDistance.sort(key=lambda x: (-x['pds'], x['lev']))

for i in range(0, 7):
    print(wordDistance[i]["word"], wordDistance[i]["pds"], wordDistance[i]["lev"])


