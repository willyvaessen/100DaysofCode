try:
    print('Running the try...')
    import mars
    print('5'+5) # Trigger type error

except TypeError as t:
    print('TypeError triggered ...')

except NameError as n:
    print('NameError triggered')

except Exception as e:
    print(str(e))
    print('General error encountered')

print('Code Continues onward ...')