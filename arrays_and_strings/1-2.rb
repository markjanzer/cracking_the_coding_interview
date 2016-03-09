# Given two strings, write a method to determine if one is a permuatation of the other

def permutation?(str1, str2)
  return str1.split("").sort == str2.split("").sort
end

p permutation?("oh hey", "what's good?")
p permutation?("sup brew", "bup srew")